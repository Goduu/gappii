import { ChatPromptTemplate } from "@langchain/core/prompts";

const prompt = ChatPromptTemplate.fromTemplate(
    `What are three good names for a company that makes {product}?`
)

const result = await prompt.format({
    product: "colorful socks"
});

console.log(result);


const result2 = await prompt.formatMessages({
    product: "colorful socks"
});

console.log(result);