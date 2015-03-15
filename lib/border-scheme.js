export var backgroundCharacter = ' ';

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
                                no: backgroundCharacter,
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
                                no: backgroundCharacter,
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
                        no: backgroundCharacter,
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
                        no: backgroundCharacter,
                        yes: '─'
                    }
                },
                // ┌─┐
                // │x│
                // └─┘
                mid: backgroundCharacter,
                max: {
                    // ┌─┐
                    // │ │
                    // └x┘
                    bottom: {
                        no: backgroundCharacter,
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
                                no: backgroundCharacter,
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
                        no: backgroundCharacter,
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
                                no: backgroundCharacter,
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
