# Social-Media-Analysis

## Demo  

## Project Description  
This project analyzes social media engagement data to generate insights about post performance based on engagement metrics like likes, shares, and comments. It utilizes **Langflow** for workflow creation and GPT integration and **DataStax Astra DB** for database operations.  

## Features 🌟  
- Fetch and store engagement data (likes, comments, shares, post types) in **DataStax Astra DB**.
- Analyze average engagement metrics for various post types like carousel, reels, and static images.
- Generate data-driven insights using **Langflow** and **GPT integration**.
- Workflow-based, backend-focused solution with no UI/UX requirement.

## Tech Stack 🛠️
- **Langflow**: Workflow creation and GPT integration.
- **DataStax Astra DB**: Cloud database for storing and querying engagement data.
- **Python**: Backend scripting and data analysis.
- **Docker** (optional): For setting up the dev container.

## Langflow Diagrams  
![file_2025-01-08_14 53 12](https://github.com/user-attachments/assets/6ca33af3-5a97-4473-a5e6-7eff458487fa)  
![file_2025-01-08_14 54 46](https://github.com/user-attachments/assets/1968f278-d635-407e-b938-c5f7cac08796)



## Installation & Setup  
### 1. Clone the repository  
`git clone https://github.com/<your-username>/<repository-name>.git`  
`cd <repository-name>`  
### 2. Set Up DataStax Astra DB
Create a free account on DataStax Astra.  
Set up a new database.  
Obtain your Secure Connect Bundle and place it in the project directory.  
### 3. Configure Environment  
Install Python dependencies:  
`pip install -r requirements.txt`  
Configure database connection in your script using the Secure Connect Bundle.  
### 5. Execute the Workflow  
#### Create a workflow in Langflow to:  
  Accept post types as input.  
  Query the Astra DB for average metrics.  
  Generate GPT insights.  

## Project Workflow  
###  Data Generation:  
Simulated engagement data for mock social media accounts is stored in Astra DB.
###  Data Analysis:  
Query Astra DB to calculate average engagement metrics for each post type.  
### Insight Generation:  
Use GPT via Langflow to provide actionable insights based on engagement data.  





