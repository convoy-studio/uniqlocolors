<?php

namespace Uniqlo\UserBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\StreamedResponse;

use Uniqlo\UserBundle\Entity\User;

class WebController extends Controller
{
    /**
     * @Route("/")
     * @Template()
     */
    public function indexAction(Request $request)
    {
        $locale = $this->get('uniqlo.locale')->getLocale();

        return [
            'locale' => $locale
        ];
    }

    /**
     * @Route("/export")
     * @Template()
     */
    public function exportAction()
    {
        $container = $this->container;

        $response = new StreamedResponse(function() use($container) {
            $em = $container->get('doctrine')->getManager();

            $results = $em->createQuery('select u from Uniqlo\UserBundle\Entity\User u')->iterate();
            $handle = fopen('php://output', 'r+');

            fputcsv($handle, array_keys((new User)->toArray()), ';', ' ');

            while (false !== ($row = $results->next())) {
                fputcsv($handle, array_values($row[0]->toArray()), ';', ' ');
                $em->detach($row[0]);
            }

            fclose($handle);
        });

        $response->headers->set('Content-Type', 'application/force-download');
        $response->headers->set('Content-Disposition','attachment; filename="export.csv"');

        return $response;
    }
}
