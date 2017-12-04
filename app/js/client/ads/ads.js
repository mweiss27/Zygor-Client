
function addAd(imgUrl, href) {
	var html = `<img src="${imgUrl}" data-href="${href}" draggable="false" />`;
	$("#ads-container").append(html);
}

$(function() {
	/*

<ad image="http://zygorguides.com/client_ads/communityblog.jpg" href="http://zygorguides.com/blog/"/>
<ad image="http://zygorguides.com/client_ads/referral.jpg" href="http://zygorguides.com/members/referrals"/>
<ad image="http://zygorguides.com/client_ads/userfeedback.jpg" href="http://zygorguides.com/members/feedback"/>
<ad image="http://zygorguides.com/client_ads/facebook.jpg" href="https://www.facebook.com/zygorguides/"/>
*/
	addAd("http://zygorguides.com/client_ads/communityblog.jpg", "http://zygorguides.com/blog");
	addAd("http://zygorguides.com/client_ads/referral.jpg", "http://zygorguides.com/members/referrals");
	addAd("http://zygorguides.com/client_ads/userfeedback.jpg", "http://zygorguides.com/members/feedback");
	addAd("http://zygorguides.com/client_ads/facebook.jpg", "https://www.facebook.com/zygorguides");

	$(document).on("click", "#ads-container > img", function(e) {
		require("electron").shell.openExternal($(e.target).attr("data-href"));
	});
});