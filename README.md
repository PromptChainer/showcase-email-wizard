# E-mail Wizard by PromptChainer

E-mail Wizard is a React application built using Next.js that uses [PromptChainer](https://promptchainer.io/)'s API to generate an e-mail response based on user input. 
This powerful tool is perfect for generating e-mails using AI and you can create it in a matter of minutes!

Read more in our [Blog Post](https://blog.promptchainer.io/p/use-case-custom-built-email-wizard).

## 🌟 Features

- React.js & Next.js application.
- Integration with the PromptChain API.
- Dynamic rendering of the generated output.
- Adaptive textarea input for keywords.
- Loading state with randomized sentences.

## 🚀 Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js installed (>= 14.x)
- NPM or Yarn as package manager
- An API key from [PromptChain](https://promptchainer.io/) - in this Beta version it's on us :) Don't worry about it

### Installation

1. Clone the repository:
```bash
git clone https://github.com/PromptChainer/showcase-email-wizard
```
Install NPM packages:
```bash
npm install
```
Or if you are using Yarn:
```bash
yarn
```
Copy the .env.example file and create a .env file in the root of the project. Add your PromptChain API key to the .env file:
```bash
NEXT_PUBLIC_API_KEY=your_api_key_here
```
If you want to add Google Analytics, add your measurment ID to the .env file:
```bash
NEXT_PUBLIC_GA_TRACKING_ID=your_google_analytics_measurment_id_here
```
Start the development server:
```bash
npm run dev
```
Or if you are using Yarn:
```bash
yarn dev
```
Open http://localhost:3000 with your browser to see the result.

After creating a flow of your own in [PromptChainer](https://promptchainer.io/), modify in app -> page.js the following API:
```bash
"https://prod.api.promptchainer.io/api/flows/run/clhez0wo90005s10glie7tadf"
```
to your own link of flow in Dashboard.

## 📚 Usage

After you've started the application, you will find four text inputs:

1. **Subject**: The main topic of the article.
2. **Keywords**: Important words that should be included in the article.
3. **Target Audience**: The primary readers or viewers that the article will be targeting.
4. **Personal Notes**: Any additional instructions or guidelines for the content.

After filling in the desired fields, click on the 'Generate' button and the marvelous content will be created and displayed on the right side of the application.

## 🔖 Components

- **Textarea**: This is a dynamic textarea component. It resizes based on input, handles placeholder, value, onChange events, and provides optional rows and columns properties.
- **Input**: This is a reusable React component that is used to create an input field for users to enter data.
- **Loader**: This displays a loading animation while waiting for API call.
- **Output**: This is responsible for displaying the response from the API call. It takes the response data from the API. This data is then mapped to different sections, each displaying an aspect of the response. Each item in the response data includes a name and an output. The name is displayed as the title of the section and the output as the content.
For example, the sections might be: mail content, sentiment analysis, key points, and suggested reply.

## 💼 Contributing

Pull requests, suggestions and improvemnts are welcome!

## 📝 License

Distributed under the MIT License. See LICENSE for more information.

## 📫 Contact

Email: support@promptchainer.io