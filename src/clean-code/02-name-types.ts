(() => {

    const celsiusTemperatures = [33.6, 12.34];

    const serverIp = '123.123.123.123';

    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    const emailsOfUsers = users.map( user => user.email );

    const canJump = false;
    const canOpen = true;
    const hasItems = false;
    const isLoading = false;

    const initialTime = new Date().getTime();
    
    const endTime = new Date().getTime() - initialTime;

    function getBooks() {
        throw new Error('Function not implemented.');
    }

    function getBooksByURL( book: string) {
        throw new Error('Function not implemented.');
    }
    
    function areaOfSquareFromSides( sides: number ) {
        throw new Error('Function not implemented.');
    }

    function printJob() {
        throw new Error('Function not implemented.');
    }
    
})();

