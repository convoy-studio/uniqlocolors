<?php

namespace Uniqlo\UserBundle\Service;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class LocaleService
{
    const DEFAULT_LOCALE = 'en';

    private $request;

    public function __construct(RequestStack $requestStack)
    {
        $this->request = $requestStack->getCurrentRequest();
    }

    public function getLocale()
    {
        $locale  = null;
        $request = $this->request;
        $session = $request->getSession();

        if ($request->query->has('locale')) {
            $locale = $request->query->get('locale');
        } elseif ($session instanceof SessionInterface && $session->has('_locale')) {
            $locale = $session->get('_locale');
        }

        if (in_array($locale, self::getLanguages())) {
            if ($session instanceof SessionInterface) {
                $session->set('_locale', $locale);
            }

            $request->setLocale($locale);

            return $locale;
        }

        $locale = $this->detectUserLocale($request);
        $request->setLocale($locale);

        return $locale;
    }

    private function detectUserLocale(Request $request)
    {
        foreach ($request->getLanguages() as $lang) {
            $lang = substr($lang, 0, 2);

            if (in_array($lang, self::getLanguages())) {
                return $lang;
            }
        }

        return self::DEFAULT_LOCALE;
    }

    public static function getLanguages()
    {
        return ['en', 'fr', 'de', 'ru'];
    }
}
