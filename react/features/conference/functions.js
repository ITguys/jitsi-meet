import { getName } from '../app';
import { translateToHTML } from '../base/i18n';
import { RTCBrowserType } from '../base/lib-jitsi-meet';
import { showWarningNotification } from '../notifications';

/**
 * Shows the suboptimal experience notification if needed.
 *
 * @param {Function} dispatch - The dispatch method.
 * @param {Function} t - The translation function.
 * @returns {void}
 */
export function maybeShowSuboptimalExperienceNotification(dispatch, t) {
    if (!RTCBrowserType.isChrome() && !RTCBrowserType.isFirefox()) {
        dispatch(
            showWarningNotification(
                {
                    titleKey: 'notify.suboptimalExperienceTitle',
                    description: translateToHTML(
                        t,
                        'notify.suboptimalExperienceDescription',
                        {
                            appName: getName()
                        })
                }
            )
        );
    }
}
