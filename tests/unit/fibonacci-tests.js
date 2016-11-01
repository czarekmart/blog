describe('FibonaccciTests', function () {


    var fibs1, fibs2, fibs3;

    beforeEach(function(){
        fibs1 = [fib.next(), fib.next(), fib.next(), fib.next(), fib.next()];
        fibs2 = [fib.next(), fib.next(), fib.next(), fib.next(), fib.next()]; // continuation
        fib.reset();
        fibs3 = [fib.next(), fib.next(), fib.next(), fib.next(), fib.next()];
    });

    it('should test Fibonacci generator', function () {
        expect(fib).toBeDefined();
        expect(fibs1).toBeDefined();
        expect(fibs2).toBeDefined();
        expect(fibs3).toBeDefined();
        expect(fibs1.length).toBe(5);
        expect(fibs2.length).toBe(5);
        expect(fibs3.length).toBe(5);
        expect(fibs1).toEqual([0, 1, 1, 2, 3]);
        expect(fibs2).toEqual([5, 8, 13, 21, 34]);
        expect(fibs3).toEqual([0, 1, 1, 2, 3]);
    });

});



