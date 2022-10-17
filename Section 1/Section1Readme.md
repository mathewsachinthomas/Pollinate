

<b>Notes on Section 1 </b>

     A) highleveldesign.pdf
          Explanation:
            1) Following services are hosted under virtual network.
                . Load balancer which will be the front facing for post request.
                . The request from Load balancer will be passed to web server.
                . The web server has micro service application called Node.js.
                . The web server is configures to have Network Security groups to have restriction on ports and IP.
                . The web server file will call the mysql database and perform insert operation on the database.
                . The database is hosted on different availability zones to ensure redundancy.
                . It's assumed to be using Azure stack.
                . Azure backup and restore services will be scheduled to ensure data is available at the time of disaster recovery.
                . Disaster recovery failover can be performed every 6 months for governance plan.
                . Azure Autoscale can be configured if there are high increase in user hits.
      
      B) index.js
            Explanation:
              This is the Node.js landing page running on port 5000 and will call the file insert.js
      C) insert.js
            Explanation:
              The file connects to mysql database and inserts timestamp into the table.
      D) mysql-playbook.yml
            Explanation:
              This is the Ansible yaml file to install mysql database .
      E) nodejs.yml
            Explanation:
              This is the Ansible yaml file to install Nodejs
              
       F) create.sql
            Explanation:
              This is to create table for storing timestamp values.This file is used inside insert.js
              
              
 
