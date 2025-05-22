// Proxy mode, multi user

import { WebDAVServer } from "@filen/webdav"

const hostname = "0.0.0.0"
const port = process.env.PORT || 1900
const https = false
const server = new WebDAVServer({
    hostname,
    port,
    https,
    // Omit the user object
    authMode: "basic" // Only basic auth is supported in proxy mode
})

await server.start()

console.log(
    `WebDAV server started on ${https ? "https" : "http"}://${hostname === "127.0.0.1" ? "local.webdav.filen.io" : hostname}:${port}`
)
