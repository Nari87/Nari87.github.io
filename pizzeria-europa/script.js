document.addEventListener('DOMContentLoaded', function(){
    

    let vorspeisen = [
        {
            num: 1,
            name: "Antipasto Misto",
            description: "Parmaschinken, Salami, Parmesankäse, Oliven",
            price: 9.50
        },
        {
            num: 2,
            name: "Carpaccio",
            description: "Kalbfleischscheiben in Olivenöl, Zitrone und Sellerie",
            price: 9.50
        },
        {
            num: 3,
            name: "Piatto Vegetario",
            description: "Auberginen bzw. Zucchini, Broccoli und weitere Gemüsearten",
            price: 9.50
        },
        {
            num: 4,
            name: "Insalata di Pesce",
            description: "Tintenfisch in Knoblauchsoße mit Sardellenfilets und Meeresfrüchten",
            price: 9.50
        },
        {
            num: 5,
            name: "Insalata campagnola Petto D'Anatra",
            description: "Feldsalat mit Entenbrust",
            price: 10.50
        },
        {
            num: 6,
            name: "Funghi pleurotus alla griglia",
            description: "Austernpilze gegrillt",
            price: 8.50
        },
        {
            num: 191,
            name: "Vitello Tonnato",
            description: "Kalbfleisch mit Thunfischsoße",
            price: 9.50
        },
        {
            num: 192,
            name: "Scampetti alla Chef",
            description: "Kleine Krabben alla Chef",
            price: 11.50
        },
        {
            num: 193,
            name: "Prosciutto di Parma e Melone",
            description: "Parmaschinken mit Melonenecken",
            price: 9.50
        },
        {
            num: 194,
            name: "Insalata di rucola con Parmigiano",
            description: "Salat mit Parmesankäse und Tomaten",
            price: 7.50
        },
        {
            num: 195,
            name: "Rucola Con Scampetti E Aglio",
            description: "Salat mit kleinen Krabben in Knoblauchsoße",
            price: 9.50
        }

    ]

    let suppen = [
        {
            name: "Zuppa di Cipolla",
            description: "Zwiebelsuppe",
            price: 3.50
        },
        {
            name: "Zuppa di Pomodoro",
            description: "Tomatensuppe",
            price: 3.50
        },
        {
            name: "Minestrone",
            description: "Gemüsesuppe",
            price: 4.50
        },
        {
            name: "Zuppa die Pesce",
            description: "Fischsuppe",
            price: 5.50
        },
        {
            name: "Tortellini al brodo di Manzo",
            description: "Tortellini in Rindfleischsuppe",
            price: 5.50
        },
        {
            name: "Straciatella",
            description: "Bouillon mit Ei",
            preis: 4.00
        }
    ]

    let pizza = [
        
    ]
    // Vorspeisenliste
    for (let i = 0; i < vorspeisen.length; i++){
        let outerContainer = document.createElement('div');
        outerContainer.classList.add('outerContainer');
        outerContainer.setAttribute("id", "outerContainer");
        let upperRow = document.createElement('div');
        upperRow.classList.add("upperRow");
        upperRow.setAttribute("id", "upperRow");
        let nameContainer = document.createElement('div');
        nameContainer.classList.add("nameContainer");
        let priceContainer = document.createElement('div');
        priceContainer.classList.add("priceContainer");
        let descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add("descriptionContainer");

        nameContainer.textContent = vorspeisen[i].name;
        priceContainer.textContent = vorspeisen[i].price.toFixed(2) + " €";
        descriptionContainer.textContent = vorspeisen[i].description;

        document.getElementById('vorspeisenListe').appendChild(outerContainer);
        outerContainer.appendChild(upperRow);
        upperRow.appendChild(nameContainer);
        upperRow.appendChild(priceContainer);
        outerContainer.appendChild(descriptionContainer);

        document.get
    }

    // Suppenliste
    for (let i = 0; i < suppen.length; i++){
        let outerContainer = document.createElement('div');
        outerContainer.classList.add('outerContainer');
        outerContainer.setAttribute("id", "outerContainer");
        let upperRow = document.createElement('div');
        upperRow.classList.add("upperRow");
        upperRow.setAttribute("id", "upperRow");
        let nameContainer = document.createElement('div');
        nameContainer.classList.add("nameContainer");
        let priceContainer = document.createElement('div');
        priceContainer.classList.add("priceContainer");
        let descriptionContainer = document.createElement('div');
        descriptionContainer.classList.add("descriptionContainer");

        nameContainer.textContent = suppen[i].name;
        priceContainer.textContent = suppen[i].price.toFixed(2) + " €";
        descriptionContainer.textContent = suppen[i].description;

        document.getElementById('suppenListe').appendChild(outerContainer);
        outerContainer.appendChild(upperRow);
        upperRow.appendChild(nameContainer);
        upperRow.appendChild(priceContainer);
        outerContainer.appendChild(descriptionContainer);

        document.get
    }

    // Pizzaliste

}); 

/*
<div class="outerContainer">
    <div class="upperRow">                
        <div class="nameContainer">Antipasto Misto</div>
        <div class="priceContainer">9.50 €</div>
    </div>
    <div class="descriptionContainer">Parmaschinken, Salami, Parmesankäse, Oliven</div>
</div>
*/