
        // Part 1
        function makeJuice(size) {
            function addIngredients(first, second, third) {
                const output = document.getElementById('output');
                output.innerHTML = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
            }
            
            addIngredients('apple', 'orange', 'carrot');
        }
        
        makeJuice('medium');


        // Part 2
        function makeJuice2(size) {
            let ingredients = [];
            
            function addIngredients(first, second, third) {
                ingredients.push(first, second, third);
            }
            
            function displayJuice() {
                const output = document.getElementById('output');
                output.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}`;
            }
            
            addIngredients('apple', 'orange', 'carrot');
            addIngredients('banana', 'kiwi', 'spinach');
            
            displayJuice();
        }
        