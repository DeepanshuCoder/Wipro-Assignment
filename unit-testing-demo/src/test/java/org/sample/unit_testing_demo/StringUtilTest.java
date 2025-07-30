package org.sample.unit_testing_demo;

import org.junit.Test;
import static org.junit.Assert.*;

public class StringUtilTest {
    StringUtil util = new StringUtil();

    @Test
    public void testNull() {
        assertNull(util.reverse(null));
    }

    @Test
    public void testEmpty() {
        assertEquals("", util.reverse(""));
    }

    @Test
    public void testRegular() {
        assertEquals("cba", util.reverse("abc"));
    }
}
