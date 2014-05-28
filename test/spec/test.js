/* global describe, it */

// (function () {
//     'use strict';

//     describe('Give it some context', function () {
//         describe('maybe a bit more context here', function () {
//             it('should run here few assertions', function () {
//               var answer = 2;
//               expect(2).to.equal(answer);
//             });
//         });
//     });
// })();

// (function() {

// 	describe("image-slider", function() {
// 		it("should transition between images every 2 seconds.", function() {
			
// 			var display = new Display()
// 			expect(display)
// 		})

// 	})
// })
(function() {
'use strict';
	describe("image-slider", function() {
		it("should inject the correct # of img tags", function() {
			var total = $('.slideshow-container img').length

			expect(total).to.equal(2)
		});
	});
})();