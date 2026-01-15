# 1️⃣ Base Image
FROM node:20-alpine

# 2️⃣ Set working directory
WORKDIR /usr/src/app

# 3️⃣ Copy package.json and package-lock.json
COPY package*.json ./

# 4️⃣ Install dependencies
RUN npm install --production

# 5️⃣ Copy the rest of the app
COPY . .

# 6️⃣ Expose port 3000
EXPOSE 3000

# 7️⃣ Start the app
CMD ["node", "index.js"]
