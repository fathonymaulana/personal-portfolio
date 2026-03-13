const cp = require("child_process");
const fs = require("fs");
try {
  const result = cp.execSync("npx tsc --noEmit --pretty false", {
    encoding: "utf-8",
    stdio: "pipe",
  });
  fs.writeFileSync("tsc-out-utf8.txt", result);
} catch (e) {
  fs.writeFileSync("tsc-out-utf8.txt", e.stdout || e.message);
}
