# SparkAI

# **AI Interview Project**

This project is designed to automate interviews using AI technology. It provides a chat-based interface for conducting both technical and non-technical interviews. The system allows users to answer interview questions, receive feedback, and track their performance over time.

# **Features**

### **Authentication**

- Users can create accounts and log in securely.
- Implement user authentication using [authentication library/service].

### **User Dashboard**

- Users have access to a personalized dashboard.
- Display the user's profile image and allow them to update it.
- Include a chart to visualize the user's interview history and performance.
- Utilize [charting library] to generate the chart.

### **Chat Interface**

- Users interact with the system through a chat-based interface.
- Provide a welcome message to initiate the conversation.
- Offer a choice between technical and non-technical interviews.

- For technical interviews:
  - Allow users to select one or more programming languages or stacks.
- If a non-technical interview is chosen, proceed directly to the next step.
- Prompt users to specify the number of questions they want to attempt.
- Enable voice input for users to answer questions.
  Implement video support as well.
- Provide an option for users to answer using text prompts if needed to provide solution with examples.
- Display the interview result, rating different aspects on a scale of 1 to 10:
  - For technical interviews: rate technical skills and communication skills.
  - For non-technical interviews: rate communication skills.

### **Additional Features (Optional)**

- Interview History: Store and display a detailed history of all past interviews.
- Leaderboard: Implement a leaderboard to compare user performance or set benchmarks for interview aspects.
- Interview Feedback: Allow users to provide feedback on interviews.
- Interview Preparation Resources: Provide users with access to relevant resources for interview preparation.

### **Tech Stack**

- Frontend

  - Develop the frontend using React
  - Utilize Tailwind CSS for styling the user interface.
  - Integrate [charting library] to visualize the user's interview history.

- Backend

- Build the backend using Node.js
- Utilize [authentication library/service] for user authentication.
- Integrate the OpenAI API to generate interview questions and evaluate user responses.
