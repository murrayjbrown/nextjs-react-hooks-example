describe('Visit localhost server', function() {
	it('Visit Home page', function() {
		cy.visit('http://localhost:3030');
	});

	it('Visit About page', function() {
		cy.visit('http://localhost:3030/about');
	});

	it('Visit Posts page', function() {
		cy.visit('http://localhost:3030/posts');
	});

	it('Visit Counter page', function() {
		cy.visit('http://localhost:3030/counter');
	});

});
