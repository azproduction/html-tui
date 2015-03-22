import {BACKGROUND_CHARACTER} from '../../characters';

export var borderScheme = {
    x: {
        min: {
            y: {
                min: {
                    // x─┐
                    // │ │
                    // └─┘
                    left: {
                        no: {
                            top: {
                                no: BACKGROUND_CHARACTER,
                                yes: '─'
                            }
                        },
                        yes: {
                            top: {
                                no: '│',
                                yes: '┌'
                            }
                        }
                    }
                },
                max: {
                    // ┌─┐
                    // │ │
                    // x─┘
                    left: {
                        no: {
                            bottom: {
                                no: BACKGROUND_CHARACTER,
                                yes: '─'
                            }
                        },
                        yes: {
                            bottom: {
                                no: '│',
                                yes: '└'
                            }
                        }
                    }
                },
                mid: {
                    // ┌─┐
                    // x │
                    // └─┘
                    left: {
                        no: BACKGROUND_CHARACTER,
                        yes: '│'
                    }
                }
            }
        },
        mid: {
            y: {
                min: {
                    // ┌x┐
                    // │ │
                    // └─┘
                    top: {
                        no: BACKGROUND_CHARACTER,
                        yes: '─'
                    }
                },
                // ┌─┐
                // │x│
                // └─┘
                mid: BACKGROUND_CHARACTER,
                max: {
                    // ┌─┐
                    // │ │
                    // └x┘
                    bottom: {
                        no: BACKGROUND_CHARACTER,
                        yes: '─'
                    }
                }
            }
        },
        max: {
            y: {
                min: {
                    // ┌─x
                    // │ │
                    // └─┘
                    right: {
                        no: {
                            top: {
                                no: BACKGROUND_CHARACTER,
                                yes: '─'
                            }
                        },
                        yes: {
                            top: {
                                no: '│',
                                yes: '┐'
                            }
                        }
                    }
                },
                mid: {
                    // ┌─┐
                    // │ x
                    // └─┘
                    right: {
                        no: BACKGROUND_CHARACTER,
                        yes: '│'
                    }
                },
                max: {
                    // ┌─┐
                    // │ │
                    // └─x
                    right: {
                        no: {
                            bottom: {
                                no: BACKGROUND_CHARACTER,
                                yes: '─'
                            }
                        },
                        yes: {
                            bottom: {
                                no: '|',
                                yes: '┘'
                            }
                        }
                    }
                }
            }
        }
    }
};
