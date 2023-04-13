export default {
    methods: {
        sayHello() {
            alert('hello from mixin animate.');
            this.$gsap.from('.learn-more-btn', {
                x: -194,
                rotate: 45,
                scale: 0.001,
                opacity: 0,
                duration: .5,
                ease: 'Power1.easeInOut',
                scrollTrigger: {
                    trigger: '.get-started-btn',
                    // pin: true,
                    // end: 'top',
                    end: 'top 70%',
                    scrub: .5
                }
            });
        },
        slideX(className, distance = 200) {
            this.$gsap.from(className, {
                x: distance,
                // rotate: 45,
                scale: 0.5,
                opacity: 0,
                duration: .5,
                ease: 'Power1.easeInOut',
                scrollTrigger: {
                    trigger: className,
                    // pin: true,
                    // end: 'top',
                    end: 'top 70%',
                    scrub: .5
                }
            });
        },
        slideY(className, distance = 400) {
            this.$gsap.from(className, {
                y: distance,
                // rotate: 45,
                // scale: 0.5,
                opacity: 0,
                duration: .75,
                ease: 'Power1.easeInOut',
                scrollTrigger: {
                    trigger: className,
                    // pin: true,
                    // end: 'top',
                    end: 'top 70%',
                    scrub: .9
                }
            });
        },
        scale(className, scaleValue = 0.5) {
            this.$gsap.from(className, {
                // y: distance,
                // rotate: 45,
                scale: scaleValue,
                opacity: 0,
                duration: .5,
                ease: 'Power1.easeInOut',
                scrollTrigger: {
                    trigger: className,
                    // pin: true,
                    // end: 'top',
                    end: 'top 70%',
                    scrub: .5
                }
            });
        },
        fadeIn(className, opacity = 0.5) {
            this.$gsap.from(className, {
                // y: distance,
                // rotate: 45,
                // scale: 0.5,
                opacity: opacity,
                duration: 1.5,
                ease: 'Power1.easeInOut',
                scrollTrigger: {
                    trigger: className,
                    // pin: true,
                    // end: 'top',
                    end: 'top 10%',
                    scrub: 1.5
                }
            });
        }
    },
}