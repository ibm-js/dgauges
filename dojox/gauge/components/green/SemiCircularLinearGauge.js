define([
		"dojo/_base/lang", 
		"dojo/_base/declare", 
		"dojo/on", 
		"dojo/_base/Color", 
		"../GaugeUtils", 
		"../../CircularGauge", 
		"../../LinearScaler", 
		"../../CircularScale", 
		"../../CircularValueIndicator", 
		"../../CircularRangeIndicator"
	], 
	function(lang, declare, on, Color, GaugeUtils, CircularGauge, LinearScaler, CircularScale, CircularValueIndicator, CircularRangeIndicator){

	/*=====
     var CircularGauge = dojox.gauge.CircularGauge;
     =====*/
     
		return declare("dojox.gauge.components.green.SemiCircularLinearGauge", CircularGauge, {

			constructor: function(args, node){
				var scaler = new LinearScaler();
				this.addElement("background", lang.hitch(this, this.drawBackground));
				var scale = new CircularScale();
				scale.set("scaler", scaler);
				scale.set("originX", 134.06021);
				scale.set("originY", 154.90158);
				scale.set("radius", 108.66756);
				scale.set("startAngle", -136.33222);
				scale.set("endAngle", -43.02507);
				scale.set("orientation", "clockwise");
				scale.set("labelGap", 2);
				scale.set("font", {
					family: "Helvetica",
					weight: 'bold',
					size: "6pt",
					color: "black"
				});
				this.addElement("scale", scale);
				var indicator = new CircularValueIndicator();
				indicator.set("interactionArea", "gauge");
				indicator.set("value", scaler.minimum);
				indicator.set("indicatorShapeFunc", function(indicator, group, scale){
			
					var g1 = group.createGroup().setTransform({
						xx: 1,
						xy: 0,
						yx: 0,
						yy: 1,
						dx: -138.62381,
						dy: -161.2906
					});
					g1.createPath({
						path: "M-396.8819 108.376 C-396.8819 108.376 -396.8819 146.4387 -396.8819 146.4387 C-396.8819 146.4387 -378.8819 146.4387 -378.8819 146.4387 L-378.8819 108.376 L-387.7366 -48 L-396.8819 108.376 L-396.8819 108.376"
					}).setTransform({
						xx: 0.00363,
						xy: -0.67226,
						yx: 0.71506,
						yy: 0.00341,
						dx: 216.39827,
						dy: 438.81445
					}).setFill([0,0,0,1]);
					g1.createPath({
						path: "M-398 121.5498 C-391.2927 125.4647 -384.5854 124.8984 -377.8781 121.5498 L-377.8781 148 L-398 148 L-398 121.5498 Z"
					}).setTransform({
						xx: 0.00363,
						xy: -0.67226,
						yx: 0.71506,
						yy: 0.00341,
						dx: 216.39827,
						dy: 438.81445
					}).setFill([0,0,0,0.17255]);
					return group;
					
				});
				scale.addIndicator("indicator", indicator);
				this.addElement("foreground", lang.hitch(this, this.drawForeground));
			},

			drawBackground: function(g){
				g.setTransform({
					dx: -4.5636,
					dy: -6.38902
				});
				g.createPath({
					path: "M297.1838 159.5859 C297.1838 234.1274 236.2559 262.6248 161.1839 262.6248 C86.112 262.6248 25.184 234.1274 25.184 159.5859 C25.184 85.0445 86.112 50.5471 161.1839 50.5471 C236.2559 50.5471 297.1838 85.0445 297.1838 159.5859 Z"
				}).setTransform({
					xx: 1,
					xy: 0,
					yx: 0,
					yy: 1,
					dx: -20.6204,
					dy: -44.15808
				}).setFill({
					type: "linear",
					x1: 297.18381,
					y1: 262.62479,
					x2: 25.184,
					y2: 50.5471,
					colors: [
						{offset: 0, color: [255,255,255,1]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
				var g1 = g.createGroup().setTransform({
					xx: 0.71507,
					xy: 0,
					yx: 0,
					yy: 0.71507,
					dx: 416.01159,
					dy: 40.0365
				});
				g1.createPath({
					path: "M-205.5619 101.3509 C-205.5619 201.9916 -287.2413 240.3185 -387.8819 240.3185 C-488.5225 240.3185 -570.2019 201.9916 -570.2019 101.3509 C-570.2019 0.7103 -488.5225 -39.0151 -387.8819 -39.0151 C-287.2413 -39.0151 -205.5619 0.7103 -205.5619 101.3509 Z"
				}).setFill({
					type: "linear",
					x1: -570.2019,
					y1: -39.0151,
					x2: -314.9539,
					y2: 240.3185,
					colors: [
						{offset: 0, color: [226,226,221,1]},
						{offset: 0.5, color: [239,239,236,1]},
						{offset: 1, color: [255,255,255,1]}
					]
				}).setStroke({
					color: [50,50,50,1],
					width: 7.7,
					style: "Solid",
					cap: "butt",
					join: 4.0
				});
				g1.createPath({
					path: "M155.1562 93.8125 C149.734 93.8125 144.3951 94.2073 139.1875 94.9688 C169.988 91.842 202.0492 101.579 225.7812 124.0312 C251.6609 148.5152 262.878 183.0946 259.6875 216.5312 C260.4099 215.8226 261.1171 215.1087 261.8125 214.375 C262.4918 209.5723 262.875 204.6731 262.875 199.6875 C262.875 141.2443 214.6071 93.8125 155.1562 93.8125 ZM148.4062 114.4688 C125.6824 115.0342 103.252 124.0945 86.8438 141.8438 C63.9806 166.5753 58.6985 202.7726 71.5 232.3125 C72.5336 232.8638 73.5648 233.4144 74.625 233.9375 L93.375 225.8125 C82.4537 204.1167 85.721 176.4765 102.5312 157.5625 C126.7435 130.3202 169.6493 129.4018 196.375 153.4688 C221.9446 176.4946 225.8893 214.734 209.1562 243.3125 C219.0327 240.7256 228.2347 237.2879 236.5938 232.9688 C246.3106 200.1129 238.161 162.7782 211.6875 138.1562 C194.1458 121.8414 171.1301 113.9033 148.4062 114.4688 ZM93.375 225.8125 C96.5953 232.2099 101.0457 238.1088 106.75 243.0938 C107.7213 243.9426 108.7309 244.7294 109.75 245.5 C123.773 248.3253 138.9131 249.6562 154.7188 249.6562 C160.362 249.6562 165.9211 249.4708 171.375 249.125 C175.8949 246.3882 180.0717 242.9195 183.6875 238.6875 C200.5826 218.9132 199.5559 187.6883 179.0938 170.75 C161.8405 156.468 134.7774 157.5127 120.5312 175.5625 C111.5273 186.9705 110.2426 203.3366 117.5625 215.3438 L147.4062 202.4375 C140.9372 195.9684 151.2862 190.747 157.0312 192.8125 C167.4518 196.559 168.6716 210.1725 163.5 218.5312 C155.4749 231.5018 137.3669 232.6654 125.6875 224.1562 C122.3059 221.6925 119.5969 218.6809 117.5625 215.3438 L93.375 225.8125 Z"
				}).setTransform({
					xx: 1.39846,
					xy: 0,
					yx: 0,
					yy: 1.39846,
					dx: -604.2323,
					dy: -108.8083
				}).setFill({
					type: "linear",
					x1: 124.1391,
					y1: 276.14963,
					x2: 183.59734,
					y2: 124.98124,
					colors: [
						{offset: 0, color: [141,141,141,0.34902]},
						{offset: 1, color: [141,141,141,0]}
					]
				});
				g1.createPath({
					path: "M-387.8755 -35.5716 C-486.433 -35.5716 -566.7419 2.7696 -566.7419 101.3445 C-566.7419 199.9193 -486.433 236.89 -387.8755 236.89 C-289.3181 236.89 -209.0372 199.9193 -209.0372 101.3445 C-209.0372 2.7696 -289.3181 -35.5716 -387.8755 -35.5716 ZM-387.8755 -4.291 C-306.2518 -4.291 -240.3122 19.7064 -240.3122 101.3445 C-240.3122 182.9826 -306.2518 205.5814 -387.8755 205.5814 C-469.4992 205.5814 -535.4389 182.9826 -535.4389 101.3445 C-535.4389 19.7064 -469.4992 -4.291 -387.8755 -4.291 Z"
				}).setFill({
					type: "linear",
					x1: -566.74188,
					y1: -35.5716,
					x2: -566.74188,
					y2: 236.89,
					colors: [
						{offset: 0, color: [229,231,236,1]},
						{offset: 0.25, color: [109,183,19,1]},
						{offset: 0.5, color: [109,183,19,1]},
						{offset: 0.75, color: [109,183,19,1]},
						{offset: 1, color: [229,231,236,1]}
					]
				});
				g.createPath({
					path: "M157.888 90.8191 C206.2295 89.5935 246.5252 104.9717 247.8337 153.4847 C249.1422 201.9978 210.9706 216.3654 162.6291 217.591 C114.2877 218.8166 73.992 206.4384 72.6835 157.9254 C71.3749 109.4124 109.5466 92.0447 157.888 90.8191 Z"
				}).setTransform({
					xx: 1,
					xy: 0,
					yx: 0,
					yy: 1,
					dx: -20.6204,
					dy: -44.15808
				}).setStroke({
					color: [255,255,255,1],
					width: 1.42712,
					style: "Solid",
					cap: "butt",
					join: 4.0
				});
			},


			drawForeground: function(g){
				g.setTransform({
					dx: -4.5636,
					dy: -6.38902
				});
				var g1 = g.createGroup().setTransform({
					xx: 0.71507,
					xy: 0,
					yx: 0,
					yy: 0.71507,
					dx: 416.01159,
					dy: 88.44072
				});
				g1.createPath({
					path: "M-4.7084 99.7372 C-4.708 100.4807 -5.0836 101.1679 -5.6936 101.5398 C-6.3035 101.9116 -7.0551 101.9116 -7.6651 101.5398 C-8.275 101.1679 -8.6506 100.4807 -8.6503 99.7372 C-8.6506 98.9937 -8.275 98.3065 -7.6651 97.9346 C-7.0551 97.5628 -6.3035 97.5628 -5.6936 97.9346 C-5.0836 98.3065 -4.708 98.9937 -4.7084 99.7372 Z"
				}).setTransform({
					xx: 12.68481,
					xy: 0,
					yx: 0,
					yy: 11.40371,
					dx: -303.27289,
					dy: -1034.099
				}).setFill([0,0,0,0.17255]);
				g1.createPath({
					path: "M-4.7084 99.7372 C-4.708 100.4807 -5.0836 101.1679 -5.6936 101.5398 C-6.3035 101.9116 -7.0551 101.9116 -7.6651 101.5398 C-8.275 101.1679 -8.6506 100.4807 -8.6503 99.7372 C-8.6506 98.9937 -8.275 98.3065 -7.6651 97.9346 C-7.0551 97.5628 -6.3035 97.5628 -5.6936 97.9346 C-5.0836 98.3065 -4.708 98.9937 -4.7084 99.7372 Z"
				}).setTransform({
					xx: 11.66952,
					xy: 0,
					yx: 0,
					yy: 10.95128,
					dx: -310.05551,
					dy: -990.78137
				}).setFill({
					type: "radial",
					cx: -7.66483,
					cy: 99.7372,
					r: 2.0262,
					colors: [
						{offset: 0, color: [58,215,58,1]},
						{offset: 1, color: [33,161,33,1]}
					]
				});
				g1.createPath({
					path: "M-4.7084 99.7372 C-4.708 100.4807 -5.0836 101.1679 -5.6936 101.5398 C-6.3035 101.9116 -7.0551 101.9116 -7.6651 101.5398 C-8.275 101.1679 -8.6506 100.4807 -8.6503 99.7372 C-8.6506 98.9937 -8.275 98.3065 -7.6651 97.9346 C-7.0551 97.5628 -6.3035 97.5628 -5.6936 97.9346 C-5.0836 98.3065 -4.708 98.9937 -4.7084 99.7372 Z"
				}).setTransform({
					xx: 11.1657,
					xy: 0,
					yx: 0,
					yy: 10.47848,
					dx: -313.30249,
					dy: -943.7442
				}).setFill({
					type: "linear",
					x1: -8.6503,
					y1: 97.65575,
					x2: -8.6503,
					y2: 101.81865,
					colors: [
						{offset: 0, color: [255,255,246,1]},
						{offset: 0.17857, color: [252,251,236,1]},
						{offset: 0.25755, color: [250,247,230,1]},
						{offset: 0.77747, color: [246,243,224,1]},
						{offset: 1, color: [227,209,184,1]}
					]
				});
				g.createPath({
					path: "M273.707 115.7888 C273.707 138.5733 222.6582 103.1414 159.7589 103.1414 C96.8596 103.1414 45.8109 137.5733 45.8109 114.7888 C45.8109 92.0044 96.8596 55.8416 159.7589 55.8416 C222.6582 55.8416 273.707 93.0044 273.707 115.7888 Z"
				}).setTransform({
					xx: 1,
					xy: 0,
					yx: 0,
					yy: 1,
					dx: -20.6204,
					dy: -44.15808
				}).setFill({
					type: "linear",
					x1: 45.8109,
					y1: 55.8416,
					x2: 45.8109,
					y2: 123.4296,
					colors: [
						{offset: 0, color: [255,255,255,0.79216]},
						{offset: 1, color: [255,255,255,0]}
					]
				});
			}

		});
	}
);

