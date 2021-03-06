
describe('Number Test', function() {
    
    it('round', function() {
        assert.equal((42.1947).round(), 42);
        assert.equal((42.1947).round(0), 42);
        assert.equal((42.1947).round(1), 42.2);
        assert.equal((42.1947).round(2), 42.19);
        assert.equal((42.1947).round(3), 42.195);
    });
    
    it('ceil', function() {
        assert.equal((42.1947).ceil(), 43);
        assert.equal((42.1947).ceil(0), 43);
        assert.equal((42.1947).ceil(1), 42.2);
        assert.equal((42.1947).ceil(2), 42.2);
        assert.equal((42.1947).ceil(3), 42.195);
    });
    
    it('floor', function() {
        assert.equal((42.1947).floor(), 42);
        assert.equal((42.1947).floor(0), 42);
        assert.equal((42.1947).floor(1), 42.1);
        assert.equal((42.1947).floor(2), 42.19);
        assert.equal((42.1947).floor(3), 42.194);
    });

    it('toInt', function() {
        assert.equal((42.195).toInt(), 42);
    });

    it('toHex', function() {
        assert.equal((64).toHex(), '40');
        assert.equal((100).toHex(), '64');
    });

    it('toBin', function() {
        assert.equal((64).toBin(), '1000000');
        assert.equal((100).toBin(), '1100100');
    });
    
    it('toUnsigned', function() {
        assert.equal((0xf0f0f0ff | 0xff000000).toUnsigned(), 0xfff0f0ff);
        assert.equal((0xf0f0f0ff & 0xff000000).toUnsigned(), 0xf0000000);
    });

    it('padding', function() {
        assert.equal((50).padding(10), "0000000050");
    });

});
