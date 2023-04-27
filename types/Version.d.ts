export = Version;
declare function Version(): void;
declare class Version {
    /**
     * A string which describes the version of LAME.
     *
     * @return string which describes the version of LAME
     */
    getLameVersion: () => string;
    /**
     * The short version of the LAME version string.
     *
     * @return short version of the LAME version string
     */
    getLameShortVersion: () => string;
    /**
     * The shortest version of the LAME version string.
     *
     * @return shortest version of the LAME version string
     */
    getLameVeryShortVersion: () => string;
    /**
     * String which describes the version of GPSYCHO
     *
     * @return string which describes the version of GPSYCHO
     */
    getPsyVersion: () => string;
    /**
     * String which is a URL for the LAME website.
     *
     * @return string which is a URL for the LAME website
     */
    getLameUrl: () => string;
    /**
     * Quite useless for a java version, however we are compatible ;-)
     *
     * @return "32bits"
     */
    getLameOsBitness: () => string;
}
