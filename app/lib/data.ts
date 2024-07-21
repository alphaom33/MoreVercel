'use server'

import { sql } from "@vercel/postgres";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const FormSchema = z.object({
	name: z.string(),
});

export type State = {
	errors?: {
		customerId?: string[],
		amount?: string[],
		status?: string[],
	};
	message?: string | null;
};

export async function seed() {
	sql`
		CREATE TABLE IF NOT EXISTS stack (
			name VARCHAR(255) NOT NULL
		);
	`;
}

export async function killAll() {
	await sql`DELETE FROM stack`;
}

export async function sendEntry(entry: string) {
	try {
		await sql`
			INSERT INTO stack (name)
			VALUES (${entry})
		`;
		revalidatePath("/");
	} catch (err) {
		return { message: "database error" };
	}
	redirect("/");
}

export async function popStack() {
	try {
		await sql`
			DELETE
			FROM stack
			WHERE ctid IN (
				SELECT ctid
				FROM stack
				LIMIT 1
			)
		`;
		revalidatePath("/")
	} catch (err) {
		return { message: "nooooo" };
	}
}

export type thing = {
	name: string;
}

export async function getNames() {
	try {
		const out = await sql<thing>`SELECT * FROM stack`;
		return out.rows;
	} catch (err) {
		return { message: "how sad" }
	}
}
