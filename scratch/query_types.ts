import dotenv from "dotenv";
import { gql } from "../src/functions";

dotenv.config();

async function main() {
  const data = await gql(`{
    entities(
      first: 5
      filter: { name: { is: "Bitcoin" }, typeIds: { anyEqualTo: "5ef5a5860f274d8e8f6c59ae5b3e89e2" } }
    ) {
      id
      name
    }
  }`);
  console.log("Without spaceId:", JSON.stringify(data.entities, null, 2));
}

main().catch(console.error);
