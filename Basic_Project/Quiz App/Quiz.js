 const data = [
    {
      question: "Which device is required for the Internet connection?",
      option1: "Modem",
      option2: "Router",
      option3: "LAN Cable",
      option4: "Pen Drive",
      ans: 1,
    },
    {
      question: "Which continent has the highest number of countries?",
      option1: "Asia",
      option2: "Europe",
      option3: "North America",
      option4: "Africa",
      ans: 4,
    },
    {
      question: "Junk e-mail is also called?",
      option1: "Spam",
      option2: "Fake",
      option3: "Archived",
      option4: "Bin",
      ans: 1,
    },
    {
      question: "A computer cannot BOOT if it does not have the?",
      option1: "Application Software",
      option2: "Internet",
      option3: "Operating System",
      option4: "Mouse",
      ans: 3,
    },
    {
      question: "First page of Website is termed as?",
      option1: "Index Page",
      option2: "Homepage",
      option3: "Sitemap",
      option4: "Pen Drive",
      ans: 2,
    },
  ];

  const question = document.querySelector(".app h2");
  const options= document.querySelectorAll(".option button");

  for(let i=0;i<i<data.length;i++){
  question.innerHTML = "1. "+data[i].question;
  options[0].innerHTML = data[i].option1;
  options[1].innerHTML = data[i].option2;
  options[2].innerHTML = data[i].option3;
  options[3].innerHTML = data[i].option4;
  }
   