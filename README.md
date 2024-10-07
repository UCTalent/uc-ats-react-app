# ATS

## Starting the Project

**Create file .env.local in root file**
**Copy content .env.example to .env.local**

1. **Install Dependencies**:

   ```bash
   yarn
   ```

2. **Run the Development Server**:

   ```bash
   yarn dev
   ```

3. **Open Your Browser**:

   Navigate to localhost to see the initial setup.


## Run Relay Graphql
```bash
yarn relay
```

**To get schema from server

1. Run 
```bash
npm install -g get-graphql-schema
```

2. 
```bash
get-graphql-schema HOST_API > ./schema.graphql
```