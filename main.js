// app elments

const app = document.getElementById("cardsCont");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

// data of the div

let cards = [
  {
    percent: "14.30%",
    teams: "chelsea - totenham",
    n1: "zebet",
    n2: 2,
    n3: "4:40",
  },
  {
    percent: "11.20%",
    teams: "real madriad - liverpool",
    n1: "zebet",
    n2: 3,
    n3: "4:40",
  },
  {
    percent: "10.54%",
    teams: "chelsea - totenham",
    n1: "zebet",
    n2: 7,
    n3: "5:40",
  },
  {
    percent: "17.50%",
    teams: "inter - mancity",
    n1: "zebet",
    n2: 4,
    n3: "3:40",
  },
  {
    percent: "14.30%",
    teams: "chelsea - totenham",
    n1: "zebet",
    n2: 2,
    n3: "4:40",
  },
  {
    percent: "14.30%",
    teams: "chelsea - totenham",
    n1: "zebet",
    n2: 2,
    n3: "4:40",
  },
  {
    percent: "14.30%",
    teams: "chelsea - totenham",
    n1: "zebet",
    n2: 2,
    n3: "4:40",
  },
  {
    percent: "14.30%",
    teams: "chelsea - totenham",
    n1: "zebet",
    n2: 2,
    n3: "4:40",
  },
  {
    percent: "14.30%",
    teams: "chelsea - totenham",
    n1: "zebet",
    n2: 2,
    n3: "4:40",
  },
];

// other variables

let activeCard = 0;

// create this data in the dom
app.innerHTML = cards.map(function (card) {
  return `
        <div class="card">
        <div>${card.percent}</div>
        <div>
            <div>${card.teams}</div>
            <div>
                <div>${card.n1}</div>
                <div>${card.n1}</div>
                <div>${card.n3}</div>
            </div>
        </div>
    </div>`;
});

// intila page setup
app.children[1].className = "card nextCard";
for (let n = 0; n < app.childElementCount; n++) {
  if (n !== 0 && app.children[n].className === "card") {
    app.children[n].className = "card lastCard";
  }
}

// functions

const reArrange = () => {
  for (let n = 0; n < app.childElementCount; n++) {
    app.children[n].className = "card lastCard";
    if (n === activeCard) {
      app.children[n].className = "card";
    } else if (
      activeCard === n + 1 ||
      (n === app.childElementCount - 1 && activeCard === 0)
    ) {
      app.children[n].className = "card nextCard";
    }
  }
};

function checkNumber(number) {
  if (number > app.childElementCount - 1) {
    number = 0;
  }
  if (number < 0) {
    number = app.childElementCount - 1;
  }
  return (activeCard = number);
}

function Next() {
  activeCard = activeCard + 1;
  checkNumber(activeCard);
}

function Prev() {
  activeCard = activeCard - 1;
  checkNumber(activeCard);
}

next.addEventListener("click", function () {
  Next();
  reArrange();
});
prev.addEventListener("click", function () {
  Prev();
  reArrange();
});
