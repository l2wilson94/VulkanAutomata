#version 460
//	Shader developed by Slackermanz:
//		https://twitter.com/slackermanz
//		https://www.reddit.com/user/slackermanz/
//		https://github.com/Slackermanz/VulkanAutomata
//		https://www.youtube.com/channel/UCmoNsNuM0M9VsIXfm2cHPiA/videos
//		https://www.shadertoy.com/user/SlackermanzCA
//		https://discord.gg/BCuYCEn
layout(constant_id 	=  0) const 	uint SCUI00 = 0;
layout(constant_id 	=  1) const 	uint SCUI01 = 0;
layout(constant_id 	=  2) const 	uint SCUI02 = 0;
layout(constant_id 	=  3) const 	uint SCUI03 = 0;
layout(constant_id 	=  4) const 	uint SCUI04 = 0;
layout(constant_id 	=  5) const 	uint SCUI05 = 0;
layout(constant_id 	=  6) const 	uint SCUI06 = 0;
layout(constant_id 	=  7) const 	uint SCUI07 = 0;
layout(constant_id 	=  8) const 	uint SCUI08 = 0;
layout(constant_id 	=  9) const 	uint SCUI09 = 0;
layout(constant_id 	= 10) const 	uint SCUI10 = 0;
layout(constant_id 	= 11) const 	uint SCUI11 = 0;
layout(constant_id 	= 12) const 	uint SCUI12 = 0;
layout(constant_id 	= 13) const 	uint SCUI13 = 0;
layout(constant_id 	= 14) const 	uint SCUI14 = 0;
layout(constant_id 	= 15) const 	uint SCUI15 = 0;
layout(constant_id 	= 16) const 	uint SCUI16 = 0;
layout(constant_id 	= 17) const 	uint SCUI17 = 0;
layout(constant_id 	= 18) const 	uint SCUI18 = 0;
layout(constant_id 	= 19) const 	uint SCUI19 = 0;
layout(constant_id 	= 20) const 	uint SCUI20 = 0;
layout(constant_id 	= 21) const 	uint SCUI21 = 0;
layout(constant_id 	= 22) const 	uint SCUI22 = 0;
layout(constant_id 	= 23) const 	uint SCUI23 = 0;
layout(constant_id 	= 24) const 	uint SCUI24 = 0;
layout(constant_id 	= 25) const 	uint SCUI25 = 0;
layout(constant_id 	= 26) const 	uint SCUI26 = 0;
layout(constant_id 	= 27) const 	uint SCUI27 = 0;
layout(constant_id 	= 28) const 	uint SCUI28 = 0;
layout(constant_id 	= 29) const 	uint SCUI29 = 0;
layout(constant_id 	= 30) const 	uint SCUI30 = 0;
layout(constant_id 	= 31) const 	uint SCUI31 = 0;
layout(constant_id 	= 32) const 	uint SCUI32 = 0;
layout(constant_id 	= 33) const 	uint SCUI33 = 0;
layout(constant_id 	= 34) const 	uint SCUI34 = 0;
layout(constant_id 	= 35) const 	uint SCUI35 = 0;
layout(constant_id 	= 36) const 	uint SCUI36 = 0;
layout(constant_id 	= 37) const 	uint SCUI37 = 0;
layout(constant_id 	= 38) const 	uint SCUI38 = 0;
layout(constant_id 	= 39) const 	uint SCUI39 = 0;
layout(constant_id 	= 40) const 	uint SCUI40 = 0;
layout(constant_id 	= 41) const 	uint SCUI41 = 0;
layout(constant_id 	= 42) const 	uint SCUI42 = 0;
layout(constant_id 	= 43) const 	uint SCUI43 = 0;
layout(constant_id 	= 44) const 	uint SCUI44 = 0;
layout(constant_id 	= 45) const 	uint SCUI45 = 0;
layout(constant_id 	= 46) const 	uint SCUI46 = 0;
layout(constant_id 	= 47) const 	uint SCUI47 = 0;
layout(location 	=  0) out 		vec4 out_col;
layout(binding 		=  1) uniform 	sampler2D txdata;
layout(binding 		=  0) uniform 	UniBuf {
	uint wsize;
	uint frame;
	uint minfo;
	uint i0;  uint i1;  uint i2;  uint i3;
	uint v0;  uint v1;  uint v2;  uint v3;
	uint v4;  uint v5;  uint v6;  uint v7;
	uint v8;  uint v9;  uint v10; uint v11;
	uint v12; uint v13; uint v14; uint v15;
	uint v16; uint v17; uint v18; uint v19;
	uint v20; uint v21; uint v22; uint v23;
	uint v24; uint v25; uint v26; uint v27;
	uint v28; uint v29; uint v30; uint v31;
	uint v32; uint v33; uint v34; uint v35;
	uint v36; uint v37; uint v38; uint v39;
	uint v40; uint v41; uint v42; uint v43;
	uint v44; uint v45; uint v46; uint v47;
	float scale; } ub;

const int MAXSNH = 42;
const int SCNH_COUNT = 7;

ivec4 wsize_unpack(uint ui32) {
	ivec4 	wsize;
			wsize[0] = int(	 ui32 			& uint(0x00000FFF) );
			wsize[1] = int( (ui32 >> 12) 	& uint(0x00000FFF) );
			wsize[2] = int( (ui32 >> 24)	& uint(0x0000000F) );
			wsize[3] = int( (ui32 >> 28)	& uint(0x0000000F) );
	return 	wsize; }

ivec4 minfo_unpack(uint ui32) {
	ivec4 	minfo;
			minfo[0] = int( (ui32 >>  4) 	& uint(0x00000FFF) );
			minfo[1] = int(	(ui32 >> 16) 	& uint(0x00000FFF) );
			minfo[2] = int(	 ui32 		 	& uint(0x0000000F) );
			minfo[3] = int(	(ui32 >> 28) 	& uint(0x0000000F) );
	return 	minfo; }

ivec2 eval2_unpack(uint ui32) {
	ivec2 	eval2;
			eval2[0] = int( (ui32      ) 	& uint(0x0000FFFF) );
			eval2[1] = int(	(ui32 >> 16) 	& uint(0x0000FFFF) );
	return 	eval2; }

ivec4 eval4_unpack(uint ui32) {
	ivec4 	eval4;
			eval4[0] = int( (ui32      ) 	& uint(0x000000FF) );
			eval4[1] = int(	(ui32 >>  8) 	& uint(0x000000FF) );
			eval4[2] = int(	(ui32 >> 16) 	& uint(0x000000FF) );
			eval4[3] = int(	(ui32 >> 24) 	& uint(0x000000FF) );
	return 	eval4; }

uint[8] eval8_unpack(uint ui32) {
	uint[8]	eval8;
			eval8[0] = int( (ui32      ) 	& uint(0x0000000F) );
			eval8[1] = int(	(ui32 >>  4) 	& uint(0x0000000F) );
			eval8[2] = int(	(ui32 >>  8) 	& uint(0x0000000F) );
			eval8[3] = int(	(ui32 >> 12) 	& uint(0x0000000F) );
			eval8[4] = int(	(ui32 >> 16) 	& uint(0x0000000F) );
			eval8[5] = int(	(ui32 >> 20) 	& uint(0x0000000F) );
			eval8[6] = int(	(ui32 >> 24) 	& uint(0x0000000F) );
			eval8[7] = int(	(ui32 >> 28) 	& uint(0x0000000F) );
	return 	eval8; }

float gdv(ivec2 off, int v) {
//	Get Div Value: Return the value of a specified pixel
//		x, y : 	Relative integer-spaced coordinates to origin [ 0.0, 0.0 ]
//		v	 :	Colour channel [ 0, 1, 2 ]
	ivec4	dm		= wsize_unpack(ub.wsize);
	vec4 	fc 		= gl_FragCoord;
	vec2	dc		= vec2( dm[0]/dm[2], dm[1]/dm[2] );
	float	cx		= mod(fc[0]+off[0], dc[0]) + floor(fc[0]/dc[0])*dc[0];
	float	cy		= mod(fc[1]+off[1], dc[1]) + floor(fc[1]/dc[1])*dc[1];
	vec4 	pxdata 	= texelFetch( txdata, ivec2(cx, cy), 0);
	return 	pxdata[v]; }

vec3 nhd( ivec2 nbhd, ivec2 ofst, float psn, float thr, int col ) {
//	Neighbourhood: Return information about the specified group of pixels
	float dist 		= 0.0;
	float cval 		= 0.0;
	float c_total 	= 0.0;
	float c_valid 	= 0.0;
	float c_value 	= 0.0;
	for(float i = -nbhd[0]; i <= nbhd[0]; i+=1.0) {
		for(float j = -nbhd[0]; j <= nbhd[0]; j+=1.0) {
			dist = round(sqrt(i*i+j*j));
			if( dist <= nbhd[0] && dist > nbhd[1] && dist != 0.0 ) {
				cval = gdv(ivec2(i+ofst[0],j+ofst[1]),col);
				c_total += psn;
				if( cval > thr ) {
					c_valid += psn;
					cval = psn * cval;
					c_value += cval-fract(cval); } } } }
	return vec3( c_value, c_valid, c_total ); }

vec3 place(vec3 col_place, ivec4 mi) {
//	Place: Overwrite the provided colour channels at cursor location
	const 	vec4	fc 			= gl_FragCoord;
			float 	place_size 	= 18.0;
			float 	distx 		= (fc[0]-mi[0]) * (fc[0]-mi[0]);
			float 	disty 		= (fc[1]-mi[1]) * (fc[1]-mi[1]);
			float 	dist  		= sqrt(distx+disty);
	if( fc[0] > mi[0] - place_size && fc[0] < mi[0] + place_size ) {
		if( fc[1] > mi[1] - place_size && fc[1] < mi[1] + place_size ) {
			if(dist < place_size) {
				col_place[0] = (mi[2]==1) ? 1.0 : 0.0; 
				col_place[1] = col_place[0];
				col_place[2] = col_place[0];} } }
	if( fc[0] > mi[0] - place_size*1.8 && fc[0] < mi[0] + place_size*1.8) {
		if( fc[1] > mi[1] - place_size*0.25 && fc[1] < mi[1] + place_size*0.25) {
			col_place[0] = (mi[2]==1) ? 1.0 : 0.0; 
			col_place[1] = col_place[0];
			col_place[2] = col_place[0];} }
	if( fc[0] > mi[0] - place_size*0.25 && fc[0] < mi[0] + place_size*0.25) {
		if( fc[1] > mi[1] - place_size*1.8 && fc[1] < mi[1] + place_size*1.8) {
			col_place[0] = (mi[2]==1) ? 1.0 : 0.0; 
			col_place[1] = col_place[0];
			col_place[2] = col_place[0];} }
	if( fc[0] > mi[0] - place_size*0.2 && fc[0] < mi[0] + place_size*0.2) {
		if( fc[1] > mi[1] - place_size*0.2 && fc[1] < mi[1] + place_size*0.2) {
			if(dist < place_size*0.2) {
				col_place[0] = (mi[2]==1) ? 0.0 : 1.0; 
				col_place[1] = col_place[0];
				col_place[2] = col_place[0];} } }
	return col_place; }

vec3 sym_seed(vec3 col, ivec4 ws) {
	vec4	fc 			= gl_FragCoord;
	float 	place_size 	= 12.0;
	float 	distx 		= (fc[0]-ws[0]/2) * (fc[0]-ws[0]/2);
	float 	disty 		= (fc[1]-ws[1]/2) * (fc[1]-ws[1]/2);
	float 	dist  		= sqrt(distx+disty);
	if(dist < place_size) { col[0] = 1.0; col[1] = 1.0; col[2] = 1.0; }
	return col; }

//	Used to reseed the surface with lumpy noise
float get_xc(float x, float y, float xmod) {
	float sq = sqrt(mod(x*y+y, xmod)) / sqrt(xmod);
	float xc = mod((x*x)+(y*y), xmod) / xmod;
	return clamp((sq+xc)*0.5, 0.0, 1.0); }
float shuffle(float x, float y, float xmod, float val) {
	val = val * mod( x*y + x, xmod );
	return (val-floor(val)); }
float get_xcn(float x, float y, float xm0, float xm1, float ox, float oy) {
	float  xc = get_xc(x+ox, y+oy, xm0);
	return shuffle(x+ox, y+oy, xm1, xc); }
float get_lump(float x, float y, float nhsz, float xm0, float xm1) {
	float 	nhsz_c 	= 0.0;
	float 	xcn 	= 0.0;
	float 	nh_val 	= 0.0;
	for(float i = -nhsz; i <= nhsz; i += 1.0) {
		for(float j = -nhsz; j <= nhsz; j += 1.0) {
			nh_val = round(sqrt(i*i+j*j));
			if(nh_val <= nhsz) {
				xcn = xcn + get_xcn(x, y, xm0, xm1, i, j);
				nhsz_c = nhsz_c + 1.0; } } }
	float 	xcnf 	= ( xcn / nhsz_c );
	float 	xcaf	= xcnf;
	for(float i = 0.0; i <= nhsz; i += 1.0) {
			xcaf 	= clamp((xcnf*xcaf + xcnf*xcaf) * (xcnf+xcnf), 0.0, 1.0); }
	return xcaf; }
float reseed(int seed) {
	vec4	fc = gl_FragCoord;
	float 	r0 = get_lump(fc[0], fc[1],  2.0, 19.0 + mod(ub.frame+seed,17.0), 23.0 + mod(ub.frame+seed,43.0));
	float 	r1 = get_lump(fc[0], fc[1], 14.0, 13.0 + mod(ub.frame+seed,29.0), 17.0 + mod(ub.frame+seed,31.0));
	float 	r2 = get_lump(fc[0], fc[1],  6.0, 13.0 + mod(ub.frame+seed,11.0), 51.0 + mod(ub.frame+seed,37.0));
	return clamp((r0+r1)-r2,0.0,1.0); }

void main() {

//	----    ----    ----    ----    ----    ----    ----    ----
//	Shader Setup
//	----    ----    ----    ----    ----    ----    ----    ----

	vec4	fc 				= gl_FragCoord;											//	Origin Pixel Coordinates
	float 	psn				= 4032.0;												//	Texture Precision
	float 	mnp 			= 1.0/psn;												//	Minimum value of a precise step
	ivec4	wsize			= wsize_unpack(ub.wsize);								//	Layout Information
	ivec4 	minfo 			= minfo_unpack(ub.minfo);								//	Mouse State Information
	float 	div_idx			= floor((fc[0]*wsize[2])/(wsize[0]))
							+ floor((fc[1]*wsize[2])/(wsize[1]))*wsize[2];
	float	div_idx_scale 	= ((div_idx+1.0) / (wsize[2]*wsize[2]));
	float	ub_scale 		= (wsize[2] == 1.0) ? ub.scale * 0.5 : ub.scale;

//	----    ----    ----    ----    ----    ----    ----    ----
//	Uniform Buffer Unpacking
//	----    ----    ----    ----    ----    ----    ----    ----

//	UBI: 4 bit
	uint[4] ubin = uint[4] (
		ub.i0,  ub.i1,  ub.i2,  ub.i3 );

//	UBI: 4 bit to eval8
	uint[4*8] 	eval8_ubi;
	for(int i = 0; i < 4; i++) {
		uint[8] eval8_ivec_ubi = eval8_unpack(ubin[i]);
		for(int j = 0; j < 8; j++) { eval8_ubi[i*8+j] = eval8_ivec_ubi[j]; } }
//	Adjust eval8 values
	float[4*8] eval8_ubi_f;
	for(int i = 0; i < 4*8; i++) {
		eval8_ubi_f[i] = (((1.0 / (eval8_ubi[i] + 1)) * 2.0) - (1.0 * (1.0 / (eval8_ubi[i] + 1)))) * div_idx_scale * ub_scale; }

//	UBI: 4 bit to eval4
	uint[4*4] 	eval4_ubi;
	for(int i = 0; i < 4; i++) {
		ivec4 eval4_ivec_ubi = eval4_unpack(ubin[i]);
		for(int j = 0; j < 4; j++) { eval4_ubi[i*4+j] = eval4_ivec_ubi[j]; } }
//	Adjust eval4 values
	float[4*4] eval4_ubi_f;
	for(int i = 0; i < 4*4; i++) {
		eval4_ubi_f[i] = (((1.0 / (eval4_ubi[i] + 1)) * 2.0) - (1.0 * (1.0 / (eval4_ubi[i] + 1)))) * div_idx_scale * ub_scale; }

//	----    ----    ----    ----    ----    ----    ----    ----

//	UBV: 8 bit
	uint[48] ubvn = uint[48] (
		ub.v0,  ub.v1,  ub.v2,  ub.v3,
		ub.v4,  ub.v5,  ub.v6,  ub.v7,
		ub.v8,  ub.v9,  ub.v10, ub.v11,
		ub.v12, ub.v13, ub.v14, ub.v15,
		ub.v16, ub.v17, ub.v18, ub.v19,
		ub.v20, ub.v21, ub.v22, ub.v23,
		ub.v24, ub.v25, ub.v26, ub.v27,
		ub.v28, ub.v29, ub.v30, ub.v31,
		ub.v32, ub.v33, ub.v34, ub.v35,
		ub.v36, ub.v37, ub.v38, ub.v39,
		ub.v40, ub.v41, ub.v42, ub.v43,
		ub.v44, ub.v45, ub.v46, ub.v47 );

//	UBI: 8 bit to eval4
	uint[48*4] 	eval4;
	for(int i = 0; i < 48; i++) {
		ivec4 eval4_ivec = eval4_unpack(ubvn[i]);
		for(int j = 0; j < 4; j++) { eval4[i*4+j] = eval4_ivec[j]; } }
//	Adjust eval4 values
	float[48*4] eval4_f;
	for(int i = 0; i < 48*4; i++) {
		eval4_f[i] = (((1.0 / eval4[i]) * 1.5) - (0.3 * (1.0 / eval4[i]))) * div_idx_scale * ub_scale; }

//	----    ----    ----    ----    ----    ----    ----    ----
//	Rule Initilisation
//	----    ----    ----    ----    ----    ----    ----    ----

//	Origin value references
	ivec2	origin  = ivec2(0,0);
	float 	ref_r 	= gdv( origin, 0 );
	float 	ref_g 	= gdv( origin, 1 );
	float 	ref_b 	= gdv( origin, 2 );

//	Output Values
	float 	res_r 	= ref_r;
	float 	res_g 	= ref_g;
	float 	res_b 	= ref_b;

//	Parameters
	float s  = mnp *   96.0;
	float p  = mnp *   24.0;
	float b  = mnp *   12.0;

//	Get Neighbourhood Values
	vec3 nhr0 = nhd( ivec2(1,   0), origin, psn, 0.0, 0 );
	vec3 nhr1 = nhd( ivec2(5,   0), origin, psn, 0.0, 0 );
	vec3 nhr2 = nhd( ivec2(9,   0), origin, psn, 0.0, 0 );
	vec3 nhr3 = nhd( ivec2(16,  0), origin, psn, 0.0, 0 );
	vec3 nhr4 = nhd( ivec2(20,  0), origin, psn, 0.0, 0 );
	vec3 nhr5 = nhd( ivec2(30,  0), origin, psn, 0.0, 0 );
	vec3 nhr6 = nhd( ivec2(42,  0), origin, psn, 0.0, 0 );

	float[SCNH_COUNT] nhv_r;
		nhv_r[0] = nhr0[0] / nhr0[2];
		nhv_r[1] = nhr1[0] / nhr1[2];
		nhv_r[2] = nhr2[0] / nhr2[2];
		nhv_r[3] = nhr3[0] / nhr3[2];
		nhv_r[4] = nhr4[0] / nhr4[2];
		nhv_r[5] = nhr5[0] / nhr5[2];
		nhv_r[6] = nhr6[0] / nhr6[2];

//	----    ----    ----    ----    ----    ----    ----    ----
//	Transition Functions
//	----    ----    ----    ----    ----    ----    ----    ----

	for(int i = 0; i < SCNH_COUNT; i++) {
		nhv_r[i] = (res_r + nhv_r[i] * s) / (1.0 + s); }

	float[SCNH_COUNT] vari_r;

	for(int i = 0; i < SCNH_COUNT; i++) { 
		if(i == 0) 	{ vari_r[i] = res_r		 - nhv_r[i]; }
		else 		{ vari_r[i] = nhv_r[i-1] - nhv_r[i]; } }

	int vsn = 0;

	for( int i = 0; i < SCNH_COUNT; i++ ) { if( abs(vari_r[vsn]) > abs(vari_r[i]) ) { vsn = i; } }

	float minvar_r = vari_r[vsn];

	res_r =	 res_r + sign(minvar_r) * s;

	res_r =	 res_r + nhv_r[vsn] * b;

//	----    ----    ----    ----    ----    ----    ----    ----
//	Blur Application
//	----    ----    ----    ----    ----    ----    ----    ----

//	----    ----    ----    ----    ----    ----    ----    ----
//	Channel Communication
//	----    ----    ----    ----    ----    ----    ----    ----

//	----    ----    ----    ----    ----    ----    ----    ----
//	Presentation Filtering
//	----    ----    ----    ----    ----    ----    ----    ----

	vec3 	n0g 	= nhd( ivec2(1,0), origin, psn, 0.0, 1 );
	vec3 	n0b 	= nhd( ivec2(2,0), origin, psn, 0.0, 2 );
	float 	n0gw 	= n0g[0] / n0g[2];
	float 	n0bw 	= n0b[0] / n0b[2];
	res_g = ( res_g + n0gw * p * 2.0 + res_r * p * 2.0 ) / (1.0 + p * 4.0);
	res_b = ( res_b + n0bw * p * 1.0 + res_r * p * 1.0 ) / (1.0 + p * 2.0);

//	----    ----    ----    ----    ----    ----    ----    ----
//	Shader Output
//	----    ----    ----    ----    ----    ----    ----    ----

	if(ub.frame == 0 || minfo[3] == 1) { res_r = reseed(0); res_g = reseed(1); res_b = reseed(2); }
	if(minfo[3] == 2) { res_r = 0.0; res_g = 0.0; res_b = 0.0; }

	vec3 	col = vec3( res_r, res_g, res_b );
	if(minfo[3] == 3) { col = sym_seed(col, wsize); }
			col = ( minfo[2] >= 1 && minfo[2] <= 3) ? place(col, minfo) : col;

	out_col = vec4(col, 1.0);

}


