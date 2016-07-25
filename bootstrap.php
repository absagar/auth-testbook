<?php
use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Event\UserWillBeSaved;

return function(Dispatcher $events) {
	if (isset($_GET['overrideLogin']) && $_GET['overrideLogin'])
		return;
	$events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    	if ($event->isForum()) {
        	$event->addAssets(__DIR__.'/js/forum/dist/extension.js');
        	$event->addBootstrapper('absagar/auth-testbook/main');
    	}
});
	$events->listen(UserWillBeSaved::class, function (UserWillBeSaved $event){
        $event->user->setPreference("notify_postMentioned_email", true);
        $event->user->setPreference("notify_userMentioned_email", true);
        //$event->user->addPreference("avatarNew", null, null);
        //$event->user->setPreference("avatarNew", "some");
    });

};

?>
