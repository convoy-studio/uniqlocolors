<?php

namespace Uniqlo\UserBundle\Entity;

use Symfony\Component\Validator\Constraints as Assert;

use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Uniqlo\UserBundle\Entity\UserRepository")
 */
class User
{
    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255)
     * @Assert\NotBlank()
     * @Assert\Email()
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="firstName", type="string", length=255)
     * @Assert\NotBlank()
     */
    private $firstName;

    /**
     * @var string
     *
     * @ORM\Column(name="lastName", type="string", length=255)
     * @Assert\NotBlank()
     */
    private $lastName;

    /**
     * @var string
     *
     * @ORM\Column(name="gender", type="string", length=6)
     * @Assert\Regex("/^male|female$/", message="Gender can only be male or female")
     */
    private $gender;

    /**
     * @var boolean
     *
     * @ORM\Column(name="winner", type="boolean")
     * @Assert\NotNull()
     */
    private $winner;

    /**
     * @var boolean
     *
     * @ORM\Column(name="reminder", type="boolean")
     * @Assert\NotNull()
     */
    private $reminder;

    /**
     * @var boolean
     *
     * @ORM\Column(name="newsletter", type="boolean")
     * @Assert\NotNull()
     */
    private $newsletter;

    /**
     * @var string
     *
     * @ORM\Column(name="locale", type="string", length=255)
     * @Assert\NotBlank()
     * @Assert\NotNull()
     */
    private $locale;

    /**
     * @var boolean
     *
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;


    public function __construct()
    {
        $this->createdAt = new \DateTime;
    }

    public function toArray() {
        return [
            'id'         => $this->id,
            'email'      => $this->getEmail(),
            'firstName'  => $this->getFirstName(),
            'lastName'   => $this->getLastName(),
            'gender'     => $this->getGender(),
            'winner'     => $this->getWinner(),
            'reminder'   => $this->getReminder(),
            'newsletter' => $this->getNewsletter(),
            'locale'     => $this->getLocale(),
            'createdAt'  => $this->getCreatedAt()->format('c')
        ];
    }

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set email
     *
     * @param string $email
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string 
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set firstName
     *
     * @param string $firstName
     * @return User
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;

        return $this;
    }

    /**
     * Get firstName
     *
     * @return string 
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     * @return User
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;

        return $this;
    }

    /**
     * Get lastName
     *
     * @return string 
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set gender
     *
     * @param string $gender
     * @return User
     */
    public function setGender($gender)
    {
        $this->gender = $gender;

        return $this;
    }

    /**
     * Get gender
     *
     * @return string 
     */
    public function getGender()
    {
        return $this->gender;
    }

    public function setWinner($winner)
    {
        $this->winner = $winner;

        return $this;
    }

    public function getWinner()
    {
        return $this->winner;
    }

    /**
     * Set reminder
     *
     * @param boolean $reminder
     * @return User
     */
    public function setReminder($reminder)
    {
        $this->reminder = $reminder;

        return $this;
    }

    /**
     * Get reminder
     *
     * @return boolean 
     */
    public function getReminder()
    {
        return $this->reminder;
    }

    /**
     * Set newsletter
     *
     * @param boolean $newsletter
     * @return User
     */
    public function setNewsletter($newsletter)
    {
        $this->newsletter = $newsletter;

        return $this;
    }

    /**
     * Get newsletter
     *
     * @return boolean 
     */
    public function getNewsletter()
    {
        return $this->newsletter;
    }

    public function setLocale($locale)
    {
        $this->locale = $locale;

        return $this;
    }

    public function getLocale()
    {
        return $this->locale;
    }

    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getCreatedAt()
    {
        return $this->createdAt;
    }
}
