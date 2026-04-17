import { gql } from "../src/functions.ts";

async function run() {
  try {
    const data = await gql(`{
      entities(
        spaceId: "0b15de0bdcb648babae1da4a229a9a08"
        typeId: "484a18c5030a499cb0f2ef588ff16d50"
        first: 100
        offset: 0
        filter: { name: { isNull: false } }
      ) {
        id
        name
      }
    }`);
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}

run();
