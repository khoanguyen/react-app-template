# Recommended Extension for VsCode
- *Easy LESS*: for compiling less file on Save

# Build

    npm run build

# Folder structure
    /src                    <- Server code, .ts files the root in this folder
    -- / common             <- Common Typescript/Javasciprt files shared both by client and server
    -- / public             <- Client code
        --/ css             <- css files
        --/ js              <- external JS library
        --/ ts              <- Typescript code
        --/ less            <- LESS files
    -- / views              <- EJS views
