require 'pry'

=begin 
    Question 1 will return nil

    Question 2 I dont think it will return 
    anything if you dont provide an argument.

    Question 3 You could use a starts.with? method
=end


def find_a(things)
    new_array = []
    things.each do |thing|
        if thing.start_with?("a")
            new_array << thing
        end
    end
    new_array
end

things = ["apple", "pear", "face", "champagne", "palm tree", "aardvark", "pineapple"]
find_a(things)

def word_count(sentence)
    count = 0
    word_array = []
    sentence.split.each do |word|
        word_array << word
    end
    count = word_array.size 
end

word_count("Hi, isn't this a great and interesting sentence??")

=begin

    Question 5: Will return "Hey there, Bobby", if bobby is given as an argument. Will return "Hey there, you jerk", if no argument is given. 
    Question 6: Will return 'cat'
    Question 7: will return cat
    Question 8: cant add string to integer
    Question 11: Will return an array of lower cased names
=end

def yummy(foods)
    delicious_foods = []
    foods.each do |key,value|    
        if value == "delicious"
            delicious_foods << key
        else 
            foods.delete(key)
        end
    end
    the_good_food = delicious_foods.join(", ")
end

foods_hash = {"pie" => "delicious", "broccoli" => "not delicious",
"carrots" => "not delicious", "apples" => "delicious",
"peanut butter" => "delicious"}
yummy(foods_hash)


archer = {
      "name" => "Sterling Mallory Archer",
      "co-workers"=> ["Lana Kane", "Cyril Figgis", "Cheryl Tunt", "Pam Poovey", "Dr Krieger"],
      "favorite_drink" => "Bloody Mary",
      "Quotes" => ["I swear to god, I had something for this", "Phrasing", "Boop", "Danger Zone", "Read a book", "Do you not?", "Can't or won't?"]
}
def archer_quote(hash)
    quotes = hash["Quotes"]
    puts quotes.sample
    binding.pry
end

archer_quote(archer)
















