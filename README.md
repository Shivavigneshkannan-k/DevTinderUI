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
        - sudo scp -r dist/*  /var/www/html
        - Enable port :80 of your instanse
            - go to security group expose port 80
