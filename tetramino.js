// peças
const I3 = [
	[
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
	],
	[
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
		[0, 0, 1, 0],
	],
	[
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[1, 1, 1, 1],
		[0, 0, 0, 0],
	],
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
	]
];
const barra = [
	[
		[0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	],
	[
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0],
		[0, 0, 1, 0, 0]
	]
];

const J = [
	[
		[1, 0, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 1, 0],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	]
];

const O = [
	[
		[0, 0, 0, 0],
		[0, 1, 1, 0],
		[0, 1, 1, 0],
		[0, 0, 0, 0],
	]
];

const S = [
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1]
	],
	[
		[0, 0, 0],
		[0, 1, 1],
		[1, 1, 0]
	],
	[
		[1, 0, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const T = [
	[
		[0, 1, 0],
		[1, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[0, 1, 0]
	]
];

const Z = [
	[
		[1, 1, 0],
		[0, 1, 1],
		[0, 0, 0]
	],
	[
		[0, 0, 1],
		[0, 1, 1],
		[0, 1, 0]
	],
	[
		[0, 0, 0],
		[1, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 0],
		[1, 1, 0],
		[1, 0, 0]
	]
];

const BLOCK = [
		[
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
			[1, 1, 1, 1],
		]
	];
	
	const VIRGULA = [
		[
			[1, 1, 0],
			[1, 1, 1],
			[0, 0, 0]
		],
		[
			[0, 1, 1],
			[0, 1, 1],
			[0, 1, 0]
		],
		[
			[0, 0, 0],
			[1, 1, 1],
			[0, 1, 1]
		],
		[
			[0, 1, 0],
			[1, 1, 0],
			[1, 1, 0]
		]
	];
	const VIRGULA2 = [
		[
			[0, 1, 1],
			[1, 1, 1],
			[0, 0, 0]
		],
		[
			[0, 1, 0],
			[0, 1, 1],
			[0, 1, 1]
		],
		[
			[0, 0, 0],
			[1, 1, 1],
			[1, 1, 0]
		],
		[
			[1, 1, 0],
			[1, 1, 0],
			[0, 1, 0]
		]
	];
	const TESAO = [
		[
			[1, 0, 0],
			[1, 1, 1],
			[1, 0, 0]
		],
		[
			[1, 1, 1],
			[0, 1, 0],
			[0, 1, 0]
		],
		[
			[0, 0, 1],
			[1, 1, 1],
			[0, 0, 1]
		],
		[
			[0, 1, 0],
			[0, 1, 0],
			[1, 1, 1]
		]
	];
	
	const L = [
		[
			[0, 0, 1],
			[1, 1, 1],
			[0, 0, 0]
		],
		[
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 1]
		],
		[
			[0, 0, 0],
			[1, 1, 1],
			[1, 0, 0]
		],
		[
			[1, 1, 0],
			[0, 1, 0],
			[0, 1, 0]
		]
	];
	
	const LEGO = [
		[
			[0, 0, 0, 0],
			[0, 1, 1, 1],
			[0, 1, 1, 1],
			[0, 0, 0, 0],
		],
		[
			[0, 0, 0, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
			[0, 1, 1, 0],
		]
	];
	
	const Y = [
		[
			[0, 1, 1],
			[1, 1, 0],
			[0, 1, 1]
		],
		[
			[0, 1, 0],
			[1, 1, 1],
			[1, 0, 1]
		],
		[
			[1, 1, 0],
			[0, 1, 1],
			[1, 1, 0]
		],
		[
			[1, 0, 1],
			[1, 1, 1],
			[0, 1, 0]
		]
	];
	
	const I = [
		[
			[0, 0, 0],
			[1, 1, 1],
			[0, 0, 0]
		],
		[
			[0, 1, 0],
			[0, 1, 0],
			[0, 1, 0]
		]
	];
	const I2 = [
		[
			[0, 0, 0],
			[0, 1, 1],
			[0, 0, 0]
		],
		[
			[0, 0, 0],
			[0, 1, 0],
			[0, 1, 0]
		]
	];
	
	const V = [
		[
			[1, 1, 0],
			[0, 1, 0],
			[0, 0, 0]
		],
		[
			[0, 1, 0],
			[1, 1, 0],
			[0, 0, 0]
		],
		[
			[1, 0, 0],
			[1, 1, 0],
			[0, 0, 0]
		],
		[
			[1, 1, 0],
			[1, 0, 0],
			[0, 0, 0]
		]
	];
	const V2 = [
		[
			[1, 0, 0],
			[1, 1, 0],
			[0, 0, 0]
		],
		[
			[1, 1, 0],
			[1, 0, 0],
			[0, 0, 0]
		],
		[
			[1, 1, 0],
			[0, 1, 0],
			[0, 0, 0]
		],
		[
			[0, 1, 0],
			[1, 1, 0],
			[0, 0, 0]
		]
	];

const H = [
	[
		[0, 0, 1],
		[1, 1, 1],
		[1, 0, 1]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[1, 1, 1]
	],
	[
		[1, 0, 1],
		[1, 1, 1],
		[1, 0, 0]
	],
	[
		[1, 1, 1],
		[0, 1, 0],
		[0, 1, 1]
	]
];
const PINGO = [
	[
		[1, 0, 0],
		[0, 0, 0],
		[0, 0, 0]
	]
];
const PINGO2 = [
	[
		[0, 0, 1],
		[0, 0, 0],
		[0, 0, 0]
	]
];
// const DIAGONAL = [
// 	[
// 		[1, 0, 0],
// 		[0, 1, 0],
// 		[0, 0, 1]
// 	],
// 	[
// 		[0, 0, 1],
// 		[0, 1, 0],
// 		[1, 0, 0]
// 	],
// 	[
// 		[1, 0, 0],
// 		[0, 1, 0],
// 		[0, 0, 1]
// 	],
// 	[
// 		[0, 0, 1],
// 		[0, 1, 0],
// 		[1, 0, 0]
// 	]
// ];
const U = [
	[
		[0, 0, 0],
		[1, 0, 1],
		[1, 1, 1]
	],
	[
		[1, 1, 0],
		[1, 0, 0],
		[1, 1, 0]
	],
	[
		[1, 1, 1],
		[1, 0, 1],
		[0, 0, 0]
	],
	[
		[0, 1, 1],
		[0, 0, 1],
		[0, 1, 1]
	]
];
