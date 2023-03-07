import iot from "./Assets/Projects/iot.gif";
import fruits from "./Assets/Projects/fruits-vegetables.png";
import qeats from "./Assets/Projects/qeats.gif";
import qmoney from "./Assets/Projects/qmoney.gif";
import portfolio from "./Assets/Projects/portfolio.png";

const proj = [
    {
        imgPath: iot,
        isBlog: false,
        title: "Smart Gym Management System",
        description : "",
        ghLink : "https://github.com/soumyajit4419/Chatify",
        demoLink : "https://chatify-49.web.app/",
    },
    {
        imgPath: iot,
        isBlog: false,
        title: "Smart Meter Management System",
        description : "Built an IoT based Smart Meter Management System using React.js Node.js MongoDB MySql and AWS IoT Simulator and Deployed it in AWS",
        ghLink : "https://github.com/JaswanthKarangula/IoT-Smart-Meter-Management-System-UI",
        demoLink : "",
    },
    {
        imgPath: fruits,
        isBlog: false,
        title: "Fruits-Vegetables Classification",
        description : "Used the plant Fruits-Vegetables dataset from Kaggle and trained a image classifier model using Tensorflow framework." +
            "The model was successfully able to detect the class of fruits/vegetables and deployed it using Tensorflow Serving and Flask . I was able to achieve an accuracy of 98% by using Resnet pretrained model.",
        ghLink : "https://github.com/JaswanthKarangula/Fruits-and-Vegetable-Classification",
        demoLink : "",
    },
    {
        imgPath: qeats,
        isBlog: false,
        title: "QEats",
        description : "Built a Backend system for a food ordering app ",
        ghLink : "https://github.com/jaswanthkarangula/qeats",
        demoLink : "",
    },
    {
        imgPath: qmoney,
        isBlog: false,
        title: "QMoney",
        description : "Implemented core logic of portfolio manager application, helps managers make recommendations to clients.",
        ghLink : "https://github.com/jaswanthkarangula/qmoney",
        demoLink : "",
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

