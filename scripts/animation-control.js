const shoppingSectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const sectionTitle = entry.target.querySelector('.section-title');
        const shoppingWoman = entry.target.querySelector('.shopping-woman');
        const spacer = entry.target.querySelector('.spacer');
        const firstCircle = entry.target.querySelector('.circle');
        const secondCircle = entry.target.querySelector('.circle:nth-child(2)');
        const thirdCircle = entry.target.querySelector('.circle:nth-child(3)');
        const fourthCircle = entry.target.querySelector('.circle:nth-child(4)');

		if (entry.isIntersecting) {
			sectionTitle.classList.add('section-title-animation');
            shoppingWoman.classList.add('shopping-woman-animation');
            spacer.classList.add('spacer-animation');
            firstCircle.classList.add('first-circle-animation');
            secondCircle.classList.add('second-circle-animation');
            thirdCircle.classList.add('third-circle-animation');
            fourthCircle.classList.add('fourth-circle-animation');
			return;
		}

		sectionTitle.classList.remove('section-title-animation');
        shoppingWoman.classList.remove('shopping-woman-animation');
        spacer.classList.remove('spacer-animation');
        firstCircle.classList.remove('first-circle-animation');
        secondCircle.classList.remove('second-circle-animation');
        thirdCircle.classList.remove('third-circle-animation');
        fourthCircle.classList.remove('fourth-circle-animation');
	});
});

shoppingSectionObserver.observe(document.querySelector('.the-shopping-section'));



const localizationSectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const firstLocalizationSubtitle = entry.target.querySelector('.localization-subtitle-wrapper h2:nth-child(1)');
        const secondLocalizationSubtitle = entry.target.querySelector('.localization-subtitle-wrapper h2:nth-child(2)');
        const thirdLocalizationSubtitle = entry.target.querySelector('.localization-subtitle-wrapper h2:nth-child(3)');
        const fourthLocalizationSubtitle = entry.target.querySelector('.localization-subtitle-wrapper h2:nth-child(4)');
        const fifthLocalizationSubtitle = entry.target.querySelector('.localization-subtitle-wrapper h2:nth-child(5)');
        const sixthLocalizationSubtitle = entry.target.querySelector('.localization-subtitle-wrapper h2:nth-child(6)');
        const seventhLocalizationSubtitle = entry.target.querySelector('.localization-subtitle-wrapper h2:nth-child(7)');

		if (entry.isIntersecting) {
			firstLocalizationSubtitle.classList.add('first-localization-animation');
            secondLocalizationSubtitle.classList.add('second-localization-animation');
            thirdLocalizationSubtitle.classList.add('third-localization-animation');
            fourthLocalizationSubtitle.classList.add('fourth-localization-animation');
            fifthLocalizationSubtitle.classList.add('fifth-localization-animation');
            sixthLocalizationSubtitle.classList.add('sixth-localization-animation');
            seventhLocalizationSubtitle.classList.add('seventh-localization-animation');
			return;
		}

        firstLocalizationSubtitle.classList.remove('first-localization-animation');
        secondLocalizationSubtitle.classList.remove('second-localization-animation');
        thirdLocalizationSubtitle.classList.remove('third-localization-animation');
        fourthLocalizationSubtitle.classList.remove('fourth-localization-animation');
        fifthLocalizationSubtitle.classList.remove('fifth-localization-animation');
        sixthLocalizationSubtitle.classList.remove('sixth-localization-animation');
        seventhLocalizationSubtitle.classList.remove('seventh-localization-animation');
	});
});

localizationSectionObserver.observe(document.querySelector('.localization'));

const economicSectionObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		const woman = entry.target.querySelector('.economic-profile-img-wrapper img');
        const chart = entry.target.querySelector('.economic-profile-info-wrapper img');

		if (entry.isIntersecting) {
			woman.classList.add('economic-woman-animation');
            chart.classList.add('economic-chart-animation');
			return;
		}

		woman.classList.remove('economic-woman-animation');
        chart.classList.remove('economic-chart-animation');
	});
});

economicSectionObserver.observe(document.querySelector('.economic-profile-bg-wrapper'));
