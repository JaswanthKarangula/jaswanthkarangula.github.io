import iot from "./Assets/Projects/iot.gif";
import fruits from "./Assets/Projects/fruits-vegetables.gif";
import qeats from "./Assets/Projects/qeats.gif";
import qmoney from "./Assets/Projects/qmoney.gif";
import portfolio from "./Assets/Projects/portfolio.png";

const proj = [
    {
        imgPath: iot,
        isBlog: false,
        title: "Smart Gym Management System",
        description : "",
        ghLink : "",
        demoLink : "",
    },
    {
        imgPath: iot,
        isBlog: false,
        title: "Smart Meter Management System",
        description : "A SaaS Application using which we can manage IoT devices and Smart meters. " +
            "Contains Monitor&Tracking, Configuration, User Management, Billing Component, etc." +
            " Built using MERN stack, AWS, kubernetes, Docker, Multi-threading.",
        ghLink : "https://github.com/JaswanthKarangula/IoT-Smart-Meter-Management-System-UI",
        demoLink : "https://drive.google.com/file/d/1croGA0fQrlG02uGJIe6MgmKk2T5ZcGgW/view?usp=sharing",
    },
    {
        imgPath: fruits,
        isBlog: false,
        title: "Fruits-Vegetables Classification",
        description : "Used the plant Fruits-Vegetables dataset from Kaggle and trained a image classifier model using Tensorflow framework." +
            "The model was successfully able to detect the class of fruits/vegetables and deployed it using Tensorflow Serving and Flask . " +
            "I was able to achieve an accuracy of 98% by using Resnet pretrained model.",
        ghLink : "https://github.com/JaswanthKarangula/Fruits-and-Vegetable-Classification",
        demoLink : "",
    },
    {
        imgPath: qeats,
        isBlog: false,
        title: "QEats",
        description : "Built a Backend system for a food ordering app using Spring Boot and MongoDB " +
            "Used Redis Cache for retrieving repeated restaurants data from MongoDB quickly " +
            "Implemented Search functionality " +
            "and  post order actions, placing email, assigning delivery agent  with RabbitMQ.",
        ghLink : "https://github.com/jaswanthkarangula/qeats",
        demoLink : "",
    },
    {
        imgPath: qmoney,
        isBlog: false,
        title: "QMoney",
        description : "Implemented core logic of portfolio manager application, helps managers make recommendations to clients.",
        ghLink : "https://github.com/jaswanthkarangula/qmoney",
        demoLink : "https://drive.google.com/file/d/1W5XEgDej3AZDY1gUMuH_zD7wgtRj36K1/view?usp=sharing",
    },
    {
        imgPath: portfolio,
        isBlog: false,
        title: "Portfolio",
        description : "Personal portfolio build with react.js, Material-UI. And deployed it using Github Pages",
        ghLink : "https://github.com/JaswanthKarangula/jaswanthkarangula.github.io",
        demoLink : "https://jaswanthkarangula.github.io/",
    },
]

export default proj;

