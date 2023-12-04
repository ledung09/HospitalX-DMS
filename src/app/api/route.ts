import { Pool } from "@neondatabase/serverless";

export const runtime = "edge"

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("phone");
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });

  const sql = `SELECT * FROM patient WHERE phone_number = ${id}`;

  const { rows } = await pool.query(sql);

  const now = rows[0];
  
  await pool.end();

  // return Response.json({ hello: now }, {status : 200});

  return Response.json({ tasks: now}, { status: 200 });
  
};
