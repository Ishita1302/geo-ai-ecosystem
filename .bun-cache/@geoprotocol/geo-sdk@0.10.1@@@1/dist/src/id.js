import { Brand } from 'effect';
export const Id = Brand.refined(id => isValid(id), id => Brand.error(`Expected ${id} to be a valid Id`));
const UUID_DASHED_REGEX = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
const UUID_DASHLESS_REGEX = /^[0-9a-fA-F]{32}$/;
export function isValid(id) {
    return UUID_DASHED_REGEX.test(id) || UUID_DASHLESS_REGEX.test(id);
}
//# sourceMappingURL=id.js.map