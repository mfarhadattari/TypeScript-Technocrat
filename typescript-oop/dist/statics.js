"use strict";
{
    // ------------->> Statics <<--------------
    class Counter {
        static increment() {
            return (Counter.count += 1);
        }
        static decrement() {
            return (Counter.count -= 1);
        }
    }
    Counter.count = 0;
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.increment());
    console.log(Counter.decrement());
}
