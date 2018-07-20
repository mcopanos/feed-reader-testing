
$(function() {
    
    describe('RSS Feeds', () => {

        // Checks to see if allFeeds is defined
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Checks to see if allFeeds has a url key and value
        it ('have a url', () => {
            allFeeds.forEach(feed => {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0); 
            });
        });

        // Checks to see if allFeeds has a name key and value
        it('have a name', () => {
            allFeeds.forEach(feed => {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    describe('The menu', () => {
        
        // Checks to see if the the menu is hidden by default
        it('is hidden by default', () => {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        // Checks to see if class toggeles when link is clicked
         it('menu changes visibility when icon is clicked', () => {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    
    describe('Initial Entries', () => {
        
        // Calls the loadFeed function
        beforeEach( (done) => {
            loadFeed(0, () => {
                done();
            }); 
        });

        // Checks to make sure the feed is not empty
        it('has atleast one entry after call', (done) => {
            expect($('.feed .entry')).not.toBe(0);
            done();
        });
    });

    
    describe('New Feed Selection', () => {
        // Variable for old content
        let  oldContent;
        let freshContent;

        //Calls the loadFeed function
        beforeEach( (done) => {
            loadFeed(0, () => {
                oldContent = $('.feed').html();
             
                loadFeed(1, () => {
                    freshContent = $('.feed').html;
                    done(); 
                });
            });     
            
        });

        it('has new content', (done) => {
            expect(freshContent).not.toBe(oldContent)
            done();
        });
    });
        
}());
