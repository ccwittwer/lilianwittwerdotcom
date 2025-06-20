/** Ticker Items */
export const gameStats = [
	// { category: 'ECNL', content: 'TSC 3 - 1 South Carolina • 2 Goals, 1 Assist' },

	// { category: 'ECNL', content: '2024/25 SEASON - 15 Goals • 12 Assists • 20 Games' },
	{
		category: 'NEWS',
		content: 'BGA battles, falls short of ECS in state quarterfinals - Oct 2024',
		url: 'https://www.williamsonherald.com/sports/soccer-bga-battles-falls-short-of-ecs-in-state-quarterfinals/article_2825ba52-8f11-11ef-aa5b-23a252da8271.html'
	},
	// { category: 'HIGH SCHOOL', content: '2024 SEASON - 17 Goals • 12 Assists • 20 Games' },
	// { category: 'HIGH SCHOOL', content: '2025 SEASON - 17 Goals • 12 Assists • 20 Games' },
	// { category: 'SEASON', content: '18 Goals • 12 Assists • 20 Games' },
	// { category: 'CAREER', content: '45 Goals • 38 Assists • 60 Games' },
	// { category: 'HIGHLIGHTS', content: 'Hat Trick vs. Ensworth • 4 Goals vs. Brentwood' },
	{ category: 'AWARDS', content: '2024 High School Region All-Tournament Team' },
	{ category: 'AWARDS', content: '2024 High School All-District' }
];

/** News Articles */
export const newsArticles = [
	{
		title: 'BGA battles, falls short of ECS in state quarterfinals',
		source: 'Williamson Herald',
		date: 'October 20, 2024',
		url: 'https://www.williamsonherald.com/sports/soccer-bga-battles-falls-short-of-ecs-in-state-quarterfinals/article_2825ba52-8f11-11ef-aa5b-23a252da8271.html'
	},
	{
		title:
			'Eighty Players Gather Outside of San Diego for Second Girls’ U-14 National Identification Camp of 2024',
		source: 'US Soccer',
		date: 'May 31, 2024',
		url: 'https://www.ussoccer.com/stories/2024/05/eighty-players-gather-outside-of-san-diego-for-second-girls-u-14-national-identification-camp-of-2024'
	}
];

/** Gallery/Highlights Items */
export const galleryItems = [
	{
		thumbnail: '/USN_freekick_thumbnail.png',
		url: 'https://www.youtube.com/embed/W83rNsH3IQM',
		description: 'Last second game winning free kick vs USN',
		tags: ['USN', 'Free Kick', 'Game Winning Goal']
	},
	// {
	// 	thumbnail: '/action_white.jpg',
	// 	url: 'https://www.youtube.com/embed/hoaWQwd6NoA',
	// 	description: 'Defending',
	// 	tags: ['Defending', 'Tackle', 'Game Winning Goal']
	// },
	// {
	// 	thumbnail: '/action_winter.jpg',
	// 	url: 'https://www.youtube.com/embed/Exn_QLdhVTc',
	// 	description: 'Set Pieces'
	// },
	// {
	// 	thumbnail: '/action_white.jpg',
	// 	url: 'https://www.youtube.com/embed/q0w0B5thotk',
	// 	description: 'Scoring Highlights'
	// },
	'/2024_USYNT_announcement_instagram.png',
	'/all_district.jpeg',
	'/regional_all_tourney.jpeg',
	'/Oct2024_ID_Camp_annc_instagram.png'
];

/** General Player Info */
export const playerInfo = {
	name: 'Lilian Wittwer',
	position: 'Striker & Attacking Midfielder',
	hometown: 'Franklin, Tennessee',
	class: '2028',
	foot: 'Both',
	jersey: '7',
	club: 'Tennessee Soccer Club',
	school: 'Battle Ground Academy',
	gpa: '4.25'
};

/** Player Profile Info List */
export const playerInfoList = [
	{
		key: 'Name',
		value: playerInfo.name
	},
	{
		key: 'Jersey #',
		value: playerInfo.jersey
	},
	{
		key: 'Position',
		value: playerInfo.position
	},
	{
		key: 'Dominant Foot',
		value: playerInfo.foot
	},
	{
		key: 'Club',
		value: 'Tennessee Soccer Club - 2010 ECNL'
	},
	{
		key: 'School',
		value: playerInfo.school
	},
	{
		key: 'Hometown',
		value: playerInfo.hometown
	},
	{
		key: 'GPA',
		value: playerInfo.gpa
	},
	{
		key: 'NCAA ID #',
		value: '2411457668'
	}
];

/** Season Stats */
export const seasonStats = [
	{
		group: 'ECNL 2025/26',
		stats: [
			{
				category: 'Goals',
				value: '--'
			},
			{
				category: 'Assists',
				value: '--'
			},
			{
				category: 'Minutes Played',
				value: '--'
			}
		]
	},
	{
		group: 'High School 2025',
		stats: [
			{
				category: 'Goals',
				value: '--'
			},
			{
				category: 'Assists',
				value: '--'
			},
			{
				category: 'Minutes Played',
				value: '--'
			}
		]
	}
];

/** Key Achievements */
export const achievements = [
	'US Soccer U14 National ID Camp 2024',
	'4x US Soccer Talent ID Center',
	'2024 High School Region All-Tournament Team',
	'2024 High School All-District',
	'2x ODP South Region Camp',
	'TN State Cup U13 Champions 2023',
	'TN State Cup U15 Finalists 2024'
];

/** Upcoming Schedule; first item shows on ticker */
export const upcomingSchedule = [
	{
		date: 'June 27, 2025',
		time: '3:20 PM PDT',
		location: 'Surf Sports Park - Field 02',
		map: 'https://maps.app.goo.gl/CLRXYqzd3wgvjHsYA',
		opponent: 'South Carolina United ECNL G10',
		type: 'ECNL North American Cup'
	},
	{
		date: 'June 28, 2025',
		time: 'TBD',
		location: 'TBD',
		map: null,
		opponent: 'TBD',
		type: 'ECNL North American Cup'
	}
	// {
	// 	date: 'June 15, 2025',
	// 	time: '10:00 AM',
	// 	location: 'TSC Training Facility',
	// 	opponent: 'TSC 2010 ECNL',
	// 	type: 'ECNL Showcase'
	// }
];
