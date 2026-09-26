const configuredBase = import.meta.env.BASE_URL || "/";
export const basePath = configuredBase.endsWith("/") ? configuredBase : `${configuredBase}/`;
export const localPath = (path: string) => `${basePath}${path.replace(/^\/+/, "")}`;
