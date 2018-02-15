# Overview

This is a collection of examples and a boilerplate project for building Aqueduct integrations.

## What's Included

- Necessary dependencies
- Some convenient scripts

# System Requirements

- Node.js (Version 8+)
    - https://nodejs.org/en/download/
- Yarn (package manager)
    - https://yarnpkg.com/lang/en/docs/install/
- Optional: A local Ethereum node
    - Necessary for operations that involve signing/sending transactions (all trading)
    - Kovan configuration recommended for testing
    - Example config.toml with Kovan chain and unlocked account. On OSX config.toml goes in /Users/MY_USERNAME/Library/Application Support/io.parity.ethereum
        ```
        [parity]
        chain = "kovan"

        [account]
        unlock = ["0x00be81aeb2c6b82c68123f49b4bf983224124ada"]
        password = ["/Users/SOME_DIRECTORY/password.file"]
        ```

# Running scripts

- `yarn run-script ./examples/get-my-open-orders`
- `yarn run-script ./any-directory/any-file-name-as-long-as-its-typescript`