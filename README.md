to do

- do error handling correctly
- fix patch on cros error -> patch('profile/edit') change to put('profile/edit')

## How to deploy Frontend on AWS EC2

- Launch Instance of EC2

### connection to ec2 server

#### using ssh:

- chmod 400 <secret>.pem
- ssh -i "Secret.pm" ubuntu@ec2-43....

#### or connect in aws console

- Install Node js using nvm
- exact version of the application
- Git Clone the project
- go to frontend app(cd devTinderUI)
  - npm install (to install deps)
  - npm run build
  - sudo apt update (update ubuntu)
  - sudo apt install nginx
  - sudo systemctl start nginx
  - sudo systemctl enable nginx
  - copy code from dist(build file) to /var/www/html
    - sudo scp -r dist/\* /var/www/html
    - Enable port :80 of your instance
      - go to security group expose port 80

## Backend Deployemnt

    - allow ec2 instance public ip to access mongoDB cluster
    - npm install pm2 -g (to run server 24/7)
    - pm2 start npm --name "DevTinder-backend" -- start
    - pm2 logs
    - pm2 list, pm2 flush <name>, pm2 stop <name>, pm2 delete <name>
    - Enable port of backend server :5000 of your instance
    - config nginx -etc/nginx/sites-available/default
        add proxy pass from localhost:5000 to /api in nginx

        sudo nano file.name (to edit file)
        cat filename (view content of the file)
    - restart nginx -sudo systemctl restart nginx
    - Modify the SERVER_DOMAIN/BASE_URL from localhost:5000 to "/api"

# proxy pass config

    server {
    listen 80;
    server_name public Ip of EC2 server;

    location /api/ {
        proxy_pass http://localhost:5000/;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Optional: serve frontend or other routes
    location / {
        try_files $uri $uri/ =404;
    }

}

Linux Commands Summary for Frontend Deployment on AWS EC2
🔐 sudo — Superuser Do
Gives admin (root) access to run restricted commands.

Needed for installing software, editing system files, etc.

Example: sudo apt install nginx

📦 apt — Advanced Package Tool
Used to manage software in Ubuntu.

Common commands:

sudo apt update – Updates available software list.

sudo apt install <package> – Installs software.

sudo apt remove <package> – Uninstalls software.

Example: sudo apt install nginx

⚙️ systemctl — Service Manager
Controls system services (start, stop, restart, enable).

Common commands:

sudo systemctl start nginx – Starts the NGINX server.

sudo systemctl enable nginx – Auto-starts NGINX on boot.

sudo systemctl status nginx – Shows NGINX status.

📁 /var/www/html — Web Server Folder
Default location where NGINX serves files from.

Copy your frontend build files here to make your site live.

Example:

bash
Copy
Edit
sudo cp -r dist/\* /var/www/html/
🧱 cp — Copy (Local)
Used to copy files within the same machine.

Syntax: cp source destination

Example:

bash
Copy
Edit
cp index.html /var/www/html/
🌐 scp — Secure Copy (Remote)
Used to copy files between local and remote machines (e.g., from your laptop to EC2).

Uses SSH and .pem key.

Example:

bash
Copy
Edit
scp -i your-key.pem file.html ubuntu@<your-ec2-ip>:/var/www/html/
🔥 Deployment Flow Recap:
Launch EC2, connect via SSH.

Install Node.js using NVM.

Clone your frontend repo: git clone <repo-url>

Navigate to frontend folder: cd devTinderUI

Install dependencies: npm install

Build the app: npm run build

Install NGINX:

bash
Copy
Edit
sudo apt update  
sudo apt install nginx  
Start and enable NGINX:

bash
Copy
Edit
sudo systemctl start nginx  
sudo systemctl enable nginx  
Replace default NGINX files:

bash
Copy
Edit
sudo rm -rf /var/www/html/_  
sudo cp -r dist/_ /var/www/html/
Visit: http://<your-ec2-ip> to see your site live.
