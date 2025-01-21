# Basic Overview of BarleyBase App

    Header
        - logo
        - NavLinks
        - Cart
    Body
        - Search bar
        - breweryList
            - Brew Card
                  - name,
                  - brewery_type,
                  - address
                  - phone
                  - city
                  - country,
                  - website_url,
    Footer
        - logo
        - links
        - copyright

# Props In React

- props => also called as Properties
- We know that, at the end, functional component is a Js function
- Js function recieves parameters and passes arguments (while in function call)
- Data passed during a function call is referred to as Props in REACT

- We pass arguments in function call -> fn(arguments)
- We receive parameter in function definition -> const fn = (parameters) => {}

# Object destructing :

    => De-structuring - props
    props.brewery => {brewery}
    props.brewery?.name => brewery.name

    => De-structuring - restaurant
    brewery => {name, brewery_type, address, phone, city, country, website_url}

    => directly De-structuring
    brewery => {name, brewery_type, address, phone, city, country, website_url,} without using props variable
        <RestroCard name = {breweryList[1].name}, brewery_type = {restaurantList[1].brewery_type}/>
        <RestroCard brewery_type = {breweryList[1].brewery_type}/>

# Spread Operator

    <BrewCard
        brewery_type = {breweryList[0].brewery_type}
        name = {breweryList[0].name}
        address={breweryList[0].address}
        city = {breweryList[0].city}
    />

    Above BrewCard function parameters will be passed using a spread operator

    <BrewCard {...breweryList[0]}/>

- Optional chaining (?.)
<!-- - Spread operator => 2:16 to 2:30 min in Video -->
- Map function is the best way to do functional programming rather than For loop.

# Config driven UI :

- designing a sytem that displays content based on the criteria (Eg: Location), basically controlled by Backend.
- Example of Config Driven UI.

        const config = [
            {
                type : "carosul",
                cards : [
                    {
                        OfferName : "50% Off"
                    },
                    {
                        OfferName : "Free Delivery"
                    }
                ]
            },
            {
                type : "restaurants",
                cards : [
                    {
                        name : "burgerKing",
                        image : "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
                        cusines : ["Latin","American"],
                        Ratings : "4.2"
                    },
                    {
                        name : "KFC",
                        image : "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FeatureCrop,algorithm=dnn,width=620,height=350?im=FaceCrop,algorithm=dnn,width=1200,height=886",
                        cusines : ["Latin","American"],
                        Ratings : "3.9"
                    }
                ]
            }
        ]

# Virtual DOM

- represenation of DOM in react is called **Virtual DOM**
- virtual DOM is not just unique to REACT , it is a Software Engg concept
- Virtual DOM is the **represenation of actual DOM using a Tree structure**
- Virtual DOM is introduced in order to achieve **Reconcilation, which makes REACT super fast**
- **Reconcilation is an concept REACT uses to diffentiate one tree (original DOM )from another (Virtual DOM)**.
- Diff Algorithm determines what needs to be changed in UI by comparing original DOM tree and Virtual DOM tree and updates only the required changes rather than re-rendering the entire tree everytime. As a result, this makes REACT fast.

In REACT,

- If an element has multiple children with same element , say div1,div2,div3
- We decided to add another div in the first place, this leads REACT to confusion because all the available children are `div` and the new children we are adding is also a `div`, so it re-render all the **div's** each time if anyone of them is edited, because it is unable to identify uniquely which `div` is edited or added.
- In order to solve this problem , we use **keys to uniquely identify each div**, then REACT re-renders only the updated div based on the keys.
- Note : There is no problem, if children are of differnt type element.

In REACT 16,

- new Diff algorithm is introduced named REACT Fiber.
- REACT fiber is new Reconcilation Engine

# Why don't we use an index as the key , despite its uniqueness ?

- no key (non acceptable ) <<< index key (last option) <<< key (most preferred) // priority order
