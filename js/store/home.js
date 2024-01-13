document.addEventListener('alpine:init', () => {
    Alpine.store('home', {
        slideshow: [
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 1',
            },
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 2',
            },
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 3',
            },
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 4',
            },
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 5',
            },
            {
                image: 'https://placehold.co/1920x1080',
                title: 'Slide 6',
            }
        ],
        block_one : {
            sub_title: 'Who are we',
            title: 'Department of Wildlife Conservation',
            body: "The Department of Wildlife Conservation has been entrusted with the responsibility of preserving eco system endowed with various plants and animal species which has inherited the country with enormous bio-diversity. The main function of the Department of Wildlife Conservation established in 1949 is the conservation of wildlife resources in Sri Lanka.",
            image: 'https://placehold.co/600x400',
            link: '#',
        },
        block_two : {
            sub_title: 'Our Leopard',
            title: 'Sri Lankan Leopard',
            body: "The Department of Wildlife Conservation has been entrusted with the responsibility of preserving eco system endowed with various plants and animal species which has inherited the country with enormous bio-diversity. The main function of the Department of Wildlife Conservation established in 1949 is the conservation of wildlife resources in Sri Lanka. The Sri Lankan leopard (Panthera pardus kotiya) is a leopard subspecies native to Sri Lanka. It was first described in 1956 by Sri Lankan zoologist Paules Edward Pieris Deraniyagala.[2] ",
            image: '/images/kotiya.jpeg',
            link: '#',
        },
    });
});