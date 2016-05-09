<?php
use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;

return function(Dispatcher $events) {
	if (isset($_GET['overrideLogin']) && $_GET['overrideLogin'])
		return;
	$events->listen(ConfigureClientView::class, function (ConfigureClientView $event) {
    	if ($event->isForum()) {
        	$event->addAssets(__DIR__.'/js/forum/dist/extension.js');
        	$event->addBootstrapper('sagar23jan/auth-testbook/main');
    	}
});

};

?>
