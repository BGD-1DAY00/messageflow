const fs = require('fs');
const path = require('path');
const semver = require('semver');

const packagesDir = path.join(__dirname, 'packages');
const packages = fs.readdirSync(packagesDir);

packages.forEach(pkg => {
    const packageJsonPath = path.join(packagesDir, pkg, 'package.json');
    const packageJson = require(packageJsonPath);

    // Increment patch version
    packageJson.version = semver.inc(packageJson.version, 'patch');

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`Updated ${pkg} to version ${packageJson.version}`);
});